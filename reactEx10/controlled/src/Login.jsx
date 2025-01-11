import React, { useState } from "react";

function Login({ onLogin }) {
  // Stati per i campi del form
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  // Gestione del submit del form
  const handleLogin = (e) => {
    e.preventDefault(); // Prevenzione comportamento predefinito
    onLogin({ username, password, remember }); // Passa lo stato al genitore
  };

  // Funzione per resettare i campi
  const handleReset = () => {
    setUsername("");
    setPassword("");
    setRemember(false);
  };

  // Disabilita il pulsante di login se username o password sono vuoti
  const isLoginDisabled = username.trim() === "" || password.trim() === "";

  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>
      {/* Input controllato per username */}
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <br />
      {/* Input controllato per password */}
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      {/* Checkbox controllata per remember */}
      <label>
        <input
          type="checkbox"
          checked={remember}
          onChange={(e) => setRemember(e.target.checked)}
        />
        Ricordami
      </label>
      <br />
      {/* Pulsante di login */}
      <button type="submit" disabled={isLoginDisabled}>
        Login
      </button>
      {/* Pulsante di reset */}
      <button type="button" onClick={handleReset}>
        Reset
      </button>
    </form>
  );
}

export default Login;
