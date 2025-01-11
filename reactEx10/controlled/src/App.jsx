import React from "react";
import InteractiveWelcome from "./InteractiveWelcome";
import Login from "./Login";

function App() {
  // Funzione che verrà chiamata al login per stampare lo stato
  const handleLogin = (state) => {
    console.log("Stato attuale del form:", state);
  };

  return (
    <div>
      <h1>React Components Example</h1>
      {/* Componente InteractiveWelcome */}
      <InteractiveWelcome />
      <hr />
      {/* Componente Login con gestione dell'evento login */}
      <Login onLogin={handleLogin} />
    </div>
  );
}

export default App;
