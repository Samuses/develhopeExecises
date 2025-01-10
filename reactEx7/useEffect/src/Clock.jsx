// Clock.jsx
import React, { useState, useEffect } from "react";

function Clock() {
  // Stato per il tempo corrente
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  // Effetto per aggiornare il tempo ogni secondo
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    // Pulizia dell'intervallo quando il componente si smonta
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h1>Clock</h1>
      <h2>{time}</h2>
    </div>
  );
}

export default Clock;
