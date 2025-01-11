import React, { useState } from "react";
import Welcome from "./welcome"; // Importa il componente Welcome
import CounterDisplay from "./CounterDisplay"; // Importa il componente CounterDisplay
import Login from "./LogIn";

function App() {
  // Gestione dello stato per l'input del nome (Welcome)
  const [name, setName] = useState("");

  return (
    <div>
      <h1>React Styling Example</h1>
      
      {/* Componente Welcome con input dinamico */}
      <div>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          placeholder="Enter your name" 
        />
        <Welcome name={name} />
      </div>

      {/* Componente CounterDisplay che mostra il contatore */}
      <div>
        <CounterDisplay count={5} /> {/* Supponiamo che il contatore sia 5 */}
      </div>

      {/* Componente Login con stile dinamico per il pulsante */}
      <div>
        <Login />
      </div>
    </div>
  );
}

export default App;
