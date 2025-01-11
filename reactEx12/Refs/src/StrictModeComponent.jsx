import React, { useEffect, useRef } from "react";

function StrictModeComponent() {
  // Ref per tracciare lo stato del montaggio
  const isMounted = useRef(false);

  useEffect(() => {
    if (!isMounted.current) {
      console.log("Component mounted for the first time!");
      isMounted.current = true; // Aggiorna la ref per indicare che il montaggio è avvenuto
    }
  }, []);

  return <h3>StrictMode Component</h3>;
}

export default StrictModeComponent;
