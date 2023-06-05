import React, {createRef} from "react"

export class UncontrolledLogin extends React.Component {
    state = {
        username: "",
        password: "",
    }
    
    _formRef = createRef()
    handleFormSubmit = (event) => {
        event.preventDefault()
        const username = event.target.elements.username.value;
        const password = event.target.elements.password.value;
        const remember = event.target.elements.remember.checked;

        console.log({
            username, password, remember
        })
    }
    
    handleDisabled = () => {
        
        return (
          this.state.username === "" ||
          this.state.password === ""
        );
    };
    
    render () {
        return (
            
            <div>
                <form ref={this._formRef} onSubmit={this.handleFormSubmit}>
                    <label>Username</label>
                    <input type="text" name="username" autoFocus onChange={ (event) => this.setState({
                        username: event.target.value
                    })}  />
                    <br />
                    <label>Password</label>
                    <input type="password" name="password" onChange={(event) => this.setState({
                        password: event.target.value
                    })}/>
                    <input type="checkbox" name="remember" />
                    <br />
                    <button type="submit" disabled={this.handleDisabled()}>Login</button>
                    <button type="reset" >Reset</button>
                </form>

                
            </div>
        )
    }
}