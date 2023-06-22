import React from 'react';
import useFormInput from './useFormInput';

const LoginForm = () => {
  const { username, password, handleUsernameChange, handlePasswordChange } = useFormInput();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form submission logic with username and password values
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleUsernameChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default LoginForm;