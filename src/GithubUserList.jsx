import React, {useState} from 'react';
import { Outlet } from 'react-router';
import ShowGithubUser from './ShowGithubUser';
import { Link } from 'react-router-dom';

export const GithubUserList = () => {
    const [state, setState] = useState({
        usernames: [],
        username: "",
    })
    
    const addUsername = () => {
        const newUsernames = [...state.usernames, state.username];
        setState({...state, usernames: newUsernames})
        console.log(state.usernames)
    }

    return (<div>
        <input type="text" name="username" value={state.username} onChange={(event) => setState({...state, username: event.target.value})}/>
        <button name="add" onClick={addUsername}>ADD</button>
        {/* <GithubUser username="Oxide"/> */}

        <ul>
            {state.usernames.map((username, index) => {

                return <li key={index}><Link to={username}>{username}</Link></li>
            })}
        </ul>
        <Outlet/>
        
        
    </div>)
}