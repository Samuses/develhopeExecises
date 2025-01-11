import React from 'react';

const GithubUser = ({ username, name, avatar }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>{username}</p>
      <img src={avatar} alt={name} width="100" />
    </div>
  );
};

export default GithubUser;
