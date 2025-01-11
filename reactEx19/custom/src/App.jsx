import React, { useState } from 'react';
import useCounter from './useCounter';
import useForm from './useForm';
import useGithubUser from './useGithubUser';
import useCurrentLocation from './useCurrentLocation';

const App = () => {
  // Uso del custom hook useCounter
  const { count, increment, decrement, reset } = useCounter(0);

  // Uso del custom hook useForm
  const { formData, handleChange } = useForm();

  // Uso del custom hook useGithubUser
  const { user, loading: githubLoading, error: githubError, fetchUser } = useGithubUser(formData.username);

  // Uso del custom hook useCurrentLocation
  const { location, loading: locationLoading, error: locationError, getCurrentLocation } = useCurrentLocation();

  return (
    <div>
      <h1>React Custom Hooks Example</h1>

      {/* Sezione del contatore */}
      <div>
        <h2>Contatore: {count}</h2>
        <button onClick={increment}>Incrementa</button>
        <button onClick={decrement}>Decrementa</button>
        <button onClick={reset}>Resetta</button>
      </div>

      {/* Sezione del modulo con username e password */}
      <div>
        <h2>Modulo di Login</h2>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>

      {/* Sezione della ricerca utente su GitHub */}
      <div>
        <h2>Ricerca utente su GitHub</h2>
        <button onClick={() => fetchUser()}>Cerca Utente</button>
        {githubLoading && <p>Caricamento dati utente...</p>}
        {githubError && <p>{githubError}</p>}
        {user && (
          <div>
            <h3>{user.name || user.login}</h3>
            <p>Username: {user.login}</p>
            <img src={user.avatar_url} alt={`${user.login} avatar`} width="100" />
          </div>
        )}
      </div>

      {/* Sezione della posizione corrente */}
      <div>
        <h2>Posizione Corrente</h2>
        <button onClick={getCurrentLocation}>Ottieni Posizione</button>
        {locationLoading && <p>Caricamento posizione...</p>}
        {locationError && <p>{locationError}</p>}
        {location && (
          <div>
            <p>Latitudine: {location.latitude}</p>
            <p>Longitudine: {location.longitude}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
