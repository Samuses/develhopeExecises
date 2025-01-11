import React from "react";
import Container from "./Container";

function App() {
  return (
    <div>
      <h1>Component Composition Example</h1>

      {/* Contenitore con titolo "Informazioni" */}
      <Container title="Informazioni">
        <p>Questo è un esempio di contenuto mostrato nel contenitore.</p>
        <p>Può contenere qualsiasi tipo di dati o altri componenti.</p>
      </Container>

      {/* Contenitore con titolo "Dettagli" */}
      <Container title="Dettagli">
        <p>Altri dettagli possono essere mostrati/mascherati.</p>
      </Container>
    </div>
  );
}

export default App;
