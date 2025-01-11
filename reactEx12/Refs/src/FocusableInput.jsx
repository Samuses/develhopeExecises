import React, { useEffect, useRef } from "react";

function FocusableInput() {
  // Referenza per l'input
  const inputRef = useRef(null);

  // Focus automatico al montaggio
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div>
      <h3>Focusable Input</h3>
      <input type="text" ref={inputRef} placeholder="Focus automatico" />
    </div>
  );
}

export default FocusableInput;
