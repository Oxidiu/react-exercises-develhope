import React from 'react';
import { Link, useParams } from 'react-router-dom';
import {GithubUser} from './GithubUser';

const ShowGithubUser = () => {
  const { username } = useParams();

  return (
    <div>
      <GithubUser username={username} />
      <Link to="/">Home</Link>
      <br />
      <Link to="/users/oxidiu">User</Link>
      <br />
      <Link to="/counter">Counter</Link>
      <br />
      <Link to="/universalTruth">Universal Truth</Link>
    </div>
  );
};

export default ShowGithubUser;
