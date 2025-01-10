// App.jsx
import React from "react";
import Counter from "./Counter";

function App() {
  return (
    <div>
      <Counter initialValue={10} incrementAmount={5} />
    </div>
  );
}

export default App;
