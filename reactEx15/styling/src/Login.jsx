// Login.jsx
import React, { useState } from "react";

function Login() {
  const [password, setPassword] = useState("");

  // Determina il colore di sfondo in base alla lunghezza della password
  const buttonStyle = {
    backgroundColor: password.length < 8 ? "red" : "green",
    color: "white",
    border: "none",
    padding: "10px 20px",
    cursor: "pointer",
  };

  return (
    <div>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter password"
      />
      <button style={buttonStyle}>Login</button>
    </div>
  );
}

export default Login;
