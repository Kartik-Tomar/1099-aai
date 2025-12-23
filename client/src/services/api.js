// Use environment variable for production, localhost for development
const API_URL = import.meta.env.VITE_API_URL
  ? `${import.meta.env.VITE_API_URL}/api`
  : "http://localhost:3000/api";

// Custom error class for unauthorized requests
export class UnauthorizedError extends Error {
  constructor(message = "Unauthorized") {
    super(message);
    this.name = "UnauthorizedError";
  }
}

export const login = async (userId, password) => {
  const response = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userId, password }),
  });

  if (!response.ok) {
    if (response.status === 401) {
      throw new UnauthorizedError();
    }
    const error = await response.json();
    throw new Error(error.error || "Login failed");
  }

  return response.json();
};

export const sendMessage = async (message, history, token) => {
  const response = await fetch(`${API_URL}/chat`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ message, history }),
  });

  if (!response.ok) {
    if (response.status === 401) {
      throw new UnauthorizedError();
    }
    const error = await response.json();
    throw new Error(error.error || "Failed to send message");
  }

  return response.json();
};
