require("dotenv").config();
const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const { handleChat } = require("./gemini");

const app = express();
const PORT = process.env.PORT || 3000;

// Configure CORS for production
app.use(cors({
  origin: process.env.FRONTEND_URL || '*',
  credentials: true
}));
app.use(express.json());

// Middleware to verify JWT
const authMiddleware = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "Access denied. No token provided." });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(400).json({ error: "Invalid token." });
  }
};

// Login Route
app.post("/api/login", (req, res) => {
  console.log("=== Login Request Received ===");
  const { userId, password } = req.body;
  console.log("User ID:", userId);

  if (
    userId === process.env.USER_ID &&
    password === process.env.USER_PASSWORD
  ) {
    const token = jwt.sign({ userId: userId }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    console.log("Login successful for user:", userId);
    res.json({ token });
  } else {
    console.log("Login failed - Invalid credentials for user:", userId);
    res.status(401).json({ error: "Invalid credentials" });
  }
});

// Chat Route (Protected)
app.post("/api/chat", authMiddleware, async (req, res) => {
  console.log("\n=== Chat API Request Received ===");
  try {
    const { message, history } = req.body;
    console.log("User message:", message);
    console.log("History length:", history ? history.length : 0);

    console.log("Sending request to Gemini LLM...");
    const response = await handleChat(message, history);

    console.log("LLM Response received, length:", response.length);
    console.log("Response preview:", response.substring(0, 100) + "...");
    console.log("=== Chat API Request Complete ===\n");

    res.json({ response });
  } catch (error) {
    console.error("=== Chat API Error ===");
    console.error("Error message:", error.message);
    console.error("Error stack:", error.stack);
    res
      .status(500)
      .json({ error: "Internal Server Error", details: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
