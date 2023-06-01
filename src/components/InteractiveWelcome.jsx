import React, {useState} from "react"
import {Welcome} from "./Welcome"


export const InteractiveWelcome = () => {
    const [name, setName] = useState("")

    return (
        <div>
            <input onChange={(ev) => {setName(ev.target.value)}}/>
            <Welcome name={name}/>
        </div>
        
    )
    
}