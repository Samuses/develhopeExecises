import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Welcome from './components/Welcome';
import Counter from './components/Counter';
import ShowGithubUser from './components/ShowGithubUser';
import GithubUserList from './components/GithubUserList';
import NotFound from './components/NotFound';

const App = () => {
  return (
    <Router>
      <div className="App">
        {/* Link di navigazione */}
        <nav>
          <Link to="/">Welcome</Link> | 
          <Link to="/counter">Counter</Link> | 
          <Link to="/users">Users</Link>
        </nav>

        <Routes>
          {/* Route per il Welcome component */}
          <Route path="/" element={<Welcome name="React Developer" />} />

          {/* Route per il Counter component */}
          <Route path="/counter" element={<Counter />} />

          {/* Route per mostrare l'utente GitHub usando il nome */}
          <Route path="/users" element={<GithubUserList />} />

          {/* Route per la visualizzazione di un utente GitHub specifico */}
          <Route path="/users/:username" element={<ShowGithubUser />} />

          {/* Route di fallback per la pagina non trovata */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
