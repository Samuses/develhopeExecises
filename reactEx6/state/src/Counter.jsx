// Counter.jsx
import React, { useState } from "react";
import CounterDisplay from "./CounterDisplay";

function Counter({ initialValue = 0, incrementAmount = 1 }) {
  // Stato per il contatore
  const [counter, setCounter] = useState(initialValue);

  // Incrementa il contatore
  const increment = () => {
    // Utilizzare una funzione come parametro del setter per evitare potenziali problemi con lo stato precedente
    setCounter((prevCounter) => prevCounter + incrementAmount);
  };

  // Decrementa il contatore
  const decrement = () => {
    setCounter((prevCounter) => prevCounter - incrementAmount);
  };

  // Resetta il contatore al valore iniziale
  const reset = () => {
    setCounter(initialValue);
  };

  return (
    <div>
      <h1>Counter Component</h1>
      {/* Renderizza il valore del contatore */}
      <CounterDisplay count={counter} />
      {/* Bottoni */}
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Counter;
