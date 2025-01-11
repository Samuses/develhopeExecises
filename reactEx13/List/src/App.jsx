import React from "react";
import Colors from "./Colors";

function App() {
  const colorList = [
    { id: 1, name: "Red" },
    { id: 2, name: "Blue" },
    { id: 3, name: "Green" },
    { id: 4, name: "Yellow" },
  ];

  return (
    <div>
      <h1>Color List</h1>
      <Colors colors={colorList} />
    </div>
  );
}

export default App;
