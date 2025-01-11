import React, { useState, useEffect } from 'react';
import debounce from 'lodash.debounce'; // Importa correttamente debounce
import GithubUser from './GithubUser';

const GithubUsers = () => {
  const [username, setUsername] = useState('');
  const [usernames, setUsernames] = useState([]);

  // Funzione debounced per la ricerca
  const debouncedSearch = debounce((value) => {
    if (value && !usernames.includes(value)) {
      setUsernames((prev) => [...prev, value]); // Aggiungi il nome utente alla lista
    }
  }, 500); // 500ms di ritardo

  // Esegui la ricerca quando l'username cambia
  useEffect(() => {
    if (username) {
      debouncedSearch(username); // Usa il debounce per evitare chiamate continue all'API
    }
  }, [username, debouncedSearch]);

  const handleRemove = (usernameToRemove) => {
    setUsernames(usernames.filter((user) => user !== usernameToRemove));
  };

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)} // Cambia l'input
          placeholder="Cerca un utente GitHub"
        />
      </form>

      <div className="user-list">
        {usernames.map((user, index) => (
          <div key={index} className="user-item">
            <GithubUser username={user} />
            <button onClick={() => handleRemove(user)}>Rimuovi</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GithubUsers;
