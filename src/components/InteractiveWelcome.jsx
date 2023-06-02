import React, {useState} from "react"
import {Welcome} from "./Welcome"

export class InteractiveWelcome extends React.Component {
    state = {
        name: ""

    }
    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    render() {
        return (
            <div>
                <input type="text" name="name" value="this.state.name" onChange={this.handleInputChange} />
                <Welcome name={this.state.name}/>
            </div>
        )
    }
}


// export const InteractiveWelcome = () => {
//     const [name, setName] = useState("")

//     return (
//         <div>
//             <input onChange={(ev) => {setName(ev.target.value)}}/>
//             <Welcome name={name}/>
//         </div>
        
//     )
    
// }