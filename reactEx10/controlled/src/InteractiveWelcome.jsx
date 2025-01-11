import React, { useState } from "react";

function InteractiveWelcome() {
  // Stato per l'input controllato
  const [name, setName] = useState("");

  return (
    <div>
      <h2>Interactive Welcome</h2>
      {/* Input controllato per aggiornare il nome */}
      <input
        type="text"
        value={name}
        placeholder="Inserisci il tuo nome"
        onChange={(e) => setName(e.target.value)}
      />
      {/* Messaggio di benvenuto dinamico */}
      <Welcome name={name} />
    </div>
  );
}

// Componente figlio per visualizzare il messaggio di benvenuto
function Welcome({ name }) {
  return <p>Welcome, {name || "Guest"}!</p>;
}

export default InteractiveWelcome;
