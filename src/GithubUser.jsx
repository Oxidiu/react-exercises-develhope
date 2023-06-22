import React, { useState, useEffect } from 'react';

const useGithubUser = (username) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGithubUser = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://api.github.com/users/${username}`);
        if (response.ok) {
          const data = await response.json();
          setUser(data);
        } else {
          setError('Error fetching GitHub user data');
        }
        setLoading(false);
      } catch (error) {
        setError('Error fetching GitHub user data');
        setLoading(false);
      }
    };

    if (username) {
      fetchGithubUser();
    }

    return () => {
      // Cleanup logic, if any
    };
  }, [username]);

  return {
    user,
    loading,
    error
  };
};

const GithubUser = ({ username }) => {
  const { user, loading, error } = useGithubUser(username);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!user) {
    return null;
  }

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.bio}</p>
      {/* Render other user data as needed */}
    </div>
  );
};

export default GithubUser;