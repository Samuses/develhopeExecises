// Counter.jsx
import React, { useState, useEffect } from "react";

function Counter({ initialValue = 0, incrementAmount = 1 }) {
  // Stato del contatore
  const [counter, setCounter] = useState(initialValue);

  // Incrementa il contatore
  const increment = () => {
    setCounter((prevCounter) => prevCounter + incrementAmount);
  };

  // Effetto per stampare il valore corrente del contatore
  useEffect(() => {
    console.log(`Current counter value: ${counter}`);
  }, [counter]); // Si attiva ogni volta che `counter` cambia

  return (
    <div>
      <h1>Counter</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default Counter;
