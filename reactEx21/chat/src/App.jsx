import React from 'react';
import ChatApp from './ChatApp'; // Importa il componente ChatApp
import './App.css'; // Importa il file CSS per stilizzare l'app

const App = () => {
  return (
    <div className="App">
      <ChatApp /> {/* Usa il componente ChatApp */}
    </div>
  );
}

export default App;
