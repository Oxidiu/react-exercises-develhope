import React, { useState, useEffect } from "react";
import { CounterDisplay } from "./CounterDisplay";


export const Counter = (props) => {
    const [count, setCount] = useState(props.initialValue);

    useEffect(() => {
        const interval = setInterval(() => {
        setCount(prevCount => prevCount + props.pace);
        }, props.interval);
        // interval()
        return () => {
        clearInterval(interval);
        };
    });

    return <CounterDisplay count={count}/>;
};


