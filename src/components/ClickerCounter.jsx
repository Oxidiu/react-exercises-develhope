import React, {useState, useEffect} from "react"

export const ClickCounter = ({onCounterChange}) => {
    const [count, setCount] = useState(0);
    const increase = () => {
        setCount(count + 1)
    }
    useEffect(() => {
        onCounterChange(count)
    },[count])
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increase}> Click Me!</button>
        </div>
    )
}