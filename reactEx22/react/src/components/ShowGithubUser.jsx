import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import GithubUser from './GithubUser';

const ShowGithubUser = () => {
  const { username } = useParams(); // Prende il parametro "username" dalla route
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const data = await response.json();
      setUser(data);
    };

    fetchUser();
  }, [username]);

  if (!user) return <p>Loading...</p>;

  return <GithubUser username={user.login} name={user.name} avatar={user.avatar_url} />;
};

export default ShowGithubUser;
