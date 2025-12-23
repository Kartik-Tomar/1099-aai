import React, { useState, useEffect } from "react";
import LoginPage from "./components/LoginPage";
import ChatInterface from "./components/ChatInterface";

function App() {
  const [token, setToken] = useState(localStorage.getItem("auth_token"));

  useEffect(() => {
    if (token) {
      localStorage.setItem("auth_token", token);
    } else {
      localStorage.removeItem("auth_token");
    }
  }, [token]);

  const handleLogin = (newToken) => {
    setToken(newToken);
  };

  const handleLogout = () => {
    setToken(null);
  };

  return (
    <div className="App">
      {!token ? (
        <LoginPage onLogin={handleLogin} />
      ) : (
        <ChatInterface token={token} onLogout={handleLogout} />
      )}
    </div>
  );
}

export default App;
