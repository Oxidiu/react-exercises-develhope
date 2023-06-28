import React, { useState } from 'react';
import { useGithubUser } from './useGithubUser';

const GithubUser = () => {
  const [username, setUsername] = useState('');
  const [usernameToFetch, setUsernameToFetch] = useState('');
  const { data: user, loading, error, refetch } = useGithubUser(usernameToFetch);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setUsernameToFetch(username);
  };

  const handleRefresh = () => {
    refetch(); // Manually trigger the refresh of the GitHub user data
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={handleUsernameChange}
          placeholder="Enter GitHub username"
        />
        <button type="submit">Fetch User</button>
      </form>
      <button onClick={handleRefresh}>Refresh</button> {/* Add the refresh button */}
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
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
