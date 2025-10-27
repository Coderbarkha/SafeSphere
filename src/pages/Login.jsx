import React, { useState } from "react";
import "../styles/login.css"; // Make sure this path is correct

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "user@safesphere.com" && password === "123456") {
      setMessage("Login successful! Redirecting to main page...");
      setMessageType("success");
      setTimeout(() => {
        window.location.href = "/"; // redirect to main page
      }, 1500);
    } else {
      setMessage("Invalid email or password.");
      setMessageType("error");
    }
  };

  return (
    <main className="login-section">
      <div className="login-card fade-in">
        <h2 id="loginaccount">Welcome Back 🌱</h2>
        <p id="loginDescription">Please log in to continue your reporting journey.</p>

        <form className="login-form" onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" id="loginBtn">
            Log In
          </button>

          {message && (
            <div
              id="loginMessage"
              className={messageType === "success" ? "text-success" : "text-danger"}
            >
              {message}
            </div>
          )}

          <p className="signup-link">
            Don’t have an account? <a href="/signup">Sign Up</a>
          </p>
        </form>
      </div>
    </main>
  );
};

export default Login;
