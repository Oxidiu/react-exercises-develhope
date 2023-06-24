import React from 'react';
import { useParams } from 'react-router-dom';
import GithubUser from './GithubUser';

const ShowGithubUser = () => {
  const { username } = useParams();

  return (
    <div>
      <h2>Github User: {username}</h2>
      <GithubUser username={username} />
    </div>
  );
};

export default ShowGithubUser;
