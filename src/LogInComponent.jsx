import React, {useState} from 'react';

export const LogInComponent = ({
    handleLogin,
    username,
    setUsername,
    loggedIn,
}) => {
     
    return (
        <div className={loggedIn === true ? "hidden" : ""}>
            <label htmlFor="username">Username
                <input type="text" name="username" value={username} onChange={(event) => setUsername(event.target.value)} />
                <button onClick={() => username !== "" &&  handleLogin()} >Log In</button>
            </label>
        </div>
    )
}