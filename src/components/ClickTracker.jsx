import {useState} from "react"

export const ClickTracker = () => {
    const [text, setText] = useState("")
    const clickHandler = (event) => {
        setText(`${event.target.innerText} clicked`)
    }
    return (
        <div>
            <h1>{text}</h1>
            <button onClick={clickHandler}>Button 1</button>
            <button onClick={clickHandler}>Button 2</button>
            <button onClick={clickHandler}>Button 3</button>
        </div>
    )
}