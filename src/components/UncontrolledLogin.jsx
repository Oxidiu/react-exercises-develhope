import React, {createRef} from "react"

export class UncontrolledLogin extends React.Component {
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
    
    // handleDisabled = () => {
        
    //     return (
    //       this._formRef.current.elements.username.value === "" ||
    //       this._formRef.current.elements.password.value === ""
    //     );
    // };
    
    render () {
        return (
            
            <div>
                <form ref={this._formRef} onSubmit={this.handleFormSubmit}>
                    <label>Username</label>
                    <input type="text" name="username" />
                    <br />
                    <label>Password</label>
                    <input type="password" name="password"/>
                    <input type="checkbox" name="remember" />
                    <br />
                    <button type="submit" >Login</button>
                    <button type="reset" >Reset</button>
                </form>

                
            </div>
        )
    }
}