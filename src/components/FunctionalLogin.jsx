import {useState} from 'react'

export const FunctionalLogin = ({onLogin}) => {
    const [state, setState] = useState({
        username: "",
        password: "",
        remember: false,
    })
    const handleInputChange = (e) => {
        setState({
            [e.target.name]: e.target.type === "checkbox" ? e.target.checked : e.target.value
        })
    }
    const handleDisabled = () => {
        if (
            state.username === "" || state.password === "" 
        ) {return true} else {return false}
    }

    return (
        <div>
            <label htmlFor="username">Username</label>
            <input type="text" name="username" value={state.username} onChange={handleInputChange}/>
            <br />
            <label htmlFor="password">Password</label>
            <input type="password" name="password" value={state.password} onChange={handleInputChange}/>
            <input type="checkbox" name="remember" checked={state.remember} onChange={handleInputChange}/>
            <br />
            <button type="button" onClick={() => onLogin(state)} disabled={handleDisabled()}>Login</button>
        </div>
    )
}