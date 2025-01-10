// App.jsx
import React from "react";
import AlertClock from "./AlertClock";

function App() {
  // Funzione per mostrare l'orario corrente
  const handleAlert = () => {
    const currentTime = new Date().toLocaleTimeString(); // Ottieni l'ora corrente
    alert(`L'orario corrente è: ${currentTime}`);
  };

  return (
    <div>
      <h1>Alert Clock</h1>
      <AlertClock onButtonClick={handleAlert} />
    </div>
  );
}

export default App;
