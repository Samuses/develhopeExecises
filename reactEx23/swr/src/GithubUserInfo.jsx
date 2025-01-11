// GithubUserInfo.js

import React from 'react';
import useGithubUser from './useGithubUser'; // Importa il custom hook

function GithubUserInfo({ username }) {
  const { data, error, isLoading, refetch } = useGithubUser(username);

  if (isLoading) return <div>Caricamento...</div>;
  if (error) return <div>Errore nel caricamento dei dati.</div>;

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.bio}</p>
      <button onClick={refetch}>Ricarica</button>
    </div>
  );
}

export default GithubUserInfo;
