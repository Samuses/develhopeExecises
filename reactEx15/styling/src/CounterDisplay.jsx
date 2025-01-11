// CounterDisplay.jsx
import React from "react";

function CounterDisplay({ count }) {
  const style = {
    fontSize: "24px",
    color: "blue", // Puoi modificare il colore a piacere
  };

  return <div style={style}>Current count: {count}</div>;
}

export default CounterDisplay;
