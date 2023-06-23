import React, { useState } from 'react';
import useGithubUser from './useGithubUser';

const GithubUser = () => {
  const [username, setUsername] = useState('');
  const { user, loading, error, fetchGithubUser } = useGithubUser();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchGithubUser(username);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={username} onChange={handleUsernameChange} placeholder="Enter GitHub username" />
        <button type="submit">Fetch User</button>
      </form>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {user && (
        <div>
          <h1>{user.name}</h1>
          <p>{user.bio}</p>
          {/* Render other user data as needed */}
        </div>
      )}
    </div>
  );
};

export default GithubUser;
