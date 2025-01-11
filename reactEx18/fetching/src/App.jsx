import React from 'react';
import GithubUsers from './GithubUsers';
import './App.css'; // Assicurati di avere il CSS importato

const App = () => {
  return (
    <div className="App">
      <h1>Ricerca Utenti GitHub</h1>
      <GithubUsers />
    </div>
  );
};

export default App;
