import React, { useState, useEffect } from 'react';

const GithubUser = ({ username }) => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Effettua la chiamata API quando cambia il nome utente
  useEffect(() => {
    if (username) {
      setLoading(true);
      setError(null);
      fetch(`https://api.github.com/users/${username}`)
        .then((response) => response.json())
        .then((data) => {
          setUserData(data);
          setLoading(false);
        })
        .catch((error) => {
          setError('Errore nel recupero dei dati');
          setLoading(false);
        });
    }
  }, [username]);

  if (loading) return <div>Caricamento...</div>;
  if (error) return <div>{error}</div>;
  if (!userData) return <div>Utente non trovato</div>;

  return (
    <div>
      <h3>{userData.name || userData.login}</h3>
      <p>Username: {userData.login}</p>
      <img src={userData.avatar_url} alt={`${userData.login} avatar`} width="100" />
    </div>
  );
};

export default GithubUser;
