import React, {useState} from "react"

export const ClickCounter = () => {
    const [count, setCount] = useState(0);
    const increase = () => {
        setCount(count + 1)
    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increase}> Click Me!</button>
        </div>
    )
}