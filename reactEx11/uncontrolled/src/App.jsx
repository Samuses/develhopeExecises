import React from "react";
import UncontrolledLogin from "./UncontrolledLogin";

function App() {
  // Funzione di gestione login con valori dal form
  const handleLogin = (data) => {
    console.log("Dati ricevuti con DOM API:", data);
  };

  // Funzione di gestione login con FormData API
  const handleLoginWithFormData = (formData) => {
    console.log("Dati ricevuti con FormData API:", Object.fromEntries(formData));
  };

  return (
    <div>
      <h1>Uncontrolled Forms Example</h1>
      <UncontrolledLogin
        onLogin={handleLogin}
        loginWithFormData={handleLoginWithFormData}
      />
    </div>
  );
}

export default App;

