// App.js o il componente principale

import React from 'react';
import { SWRConfig } from 'swr'; // Importa SWRConfig
import GithubUserInfo from './GithubUserInfo'; // Componente per visualizzare le informazioni

// Funzione fetcher per ottenere i dati da GitHub
const fetcher = (url) => fetch(url).then((res) => res.json());

function App() {
  return (
    // Imposta fetcher predefinito tramite SWRConfig
    <SWRConfig value={{ fetcher }}>
      {/* Componente che utilizza il custom hook */}
      <GithubUserInfo username="octocat" />
    </SWRConfig>
  );
}

export default App;

