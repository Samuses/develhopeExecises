// useGithubUser.js

import useSWR from 'swr'; // Importa il hook useSWR

// Funzione fetcher per ottenere i dati da GitHub
const fetcher = (url) => fetch(url).then((res) => res.json());

// Custom hook per ottenere i dati di un utente GitHub
function useGithubUser(username) {
  const { data, error, mutate } = useSWR(
    username ? `https://api.github.com/users/${username}` : null, // Se username è null, non fare la richiesta
    fetcher
  );

  // Restituisce i dati, l'errore, lo stato di caricamento e la funzione per rifare la richiesta
  return {
    data,
    error,
    isLoading: !data && !error,
    refetch: mutate, // La funzione per rifare la richiesta
  };
}

export default useGithubUser;
