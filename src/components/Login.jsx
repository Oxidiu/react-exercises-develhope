import React from "react"

export class Login extends React.Component {
    state = {
        username: "",
        password: "",
        remember: false,
    }
    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.type === "checkbox" ? e.target.checked : e.target.value 
        })

    }
    // handleLogin = (e) => {
    //     console.log(this.state)
    // }
    handleDisabled = () => {
        if(
            this.state.username === "" ||
            this.state.password === ""
        ) {return true} else {return false}
    }
    render () {
        return (
            <div>
                <label>Username</label>
                <input type="text" name="username" value={this.state.username} onChange={this.handleInputChange}/>
                <br />
                <label>Password</label>
                <input type="password" name="password" value={this.state.password} onChange={this.handleInputChange}/>
                <input type="checkbox" name="remember" checked={this.state.remember} onChange={this.handleInputChange}/>
                <br />
                <button type="button" onClick={() => this.props.onLogin(this.state)} disabled={this.handleDisabled()}>Login</button>
            </div>
        )
    }
}