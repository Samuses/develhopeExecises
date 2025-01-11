import React from "react";
import FocusableInput from "./FocusableInput";
import StrictModeComponent from "./StrictModeComponent";

function App() {
  return (
    <React.StrictMode>
      <div>
        <h1>React StrictMode Example</h1>
        {/* Componente con focus automatico */}
        <FocusableInput />
        <hr />
        {/* Componente che stampa il messaggio al primo montaggio */}
        <StrictModeComponent />
      </div>
    </React.StrictMode>
  );
}

export default App;

