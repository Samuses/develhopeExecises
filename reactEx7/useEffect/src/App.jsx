// App.jsx
import React from "react";
import Counter from "./counter";
import Clock from "./Clock";

function App() {
  return (
    <div>
      <Counter initialValue={10} incrementAmount={5} />
      <Clock />
    </div>
  );
}

export default App;
