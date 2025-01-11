import React, { useRef } from "react";

function UncontrolledLogin({ onLogin, loginWithFormData }) {
  // Referenza al form per accedere ai dati
  const formRef = useRef(null);

  // Gestione del submit con DOM API
  const handleLogin = (e) => {
    e.preventDefault(); // Prevenzione comportamento predefinito
    const formElements = e.target.elements; // Accesso agli elementi del form
    const data = {
      username: formElements.username.value,
      password: formElements.password.value,
      remember: formElements.remember.checked,
    };
    onLogin(data);
  };

  // Gestione del login con FormData API
  const handleLoginWithFormData = () => {
    if (formRef.current) {
      const formData = new FormData(formRef.current);
      loginWithFormData(formData);
    }
  };

  return (
    <form ref={formRef} onSubmit={handleLogin}>
      <h2>Uncontrolled Login</h2>
      {/* Input per username */}
      <label>
        Username:
        <input type="text" name="username" placeholder="Inserisci username" />
      </label>
      <br />
      {/* Input per password */}
      <label>
        Password:
        <input type="password" name="password" placeholder="Inserisci password" />
      </label>
      <br />
      {/* Checkbox per ricordare */}
      <label>
        <input type="checkbox" name="remember" />
        Ricordami
      </label>
      <br />
      {/* Pulsante di login */}
      <button type="submit">Login (DOM API)</button>
      {/* Pulsante di login con FormData */}
      <button
        type="button"
        onClick={handleLoginWithFormData}
        style={{ marginLeft: "10px" }}
      >
        Login (FormData API)
      </button>
    </form>
  );
}

export default UncontrolledLogin;
