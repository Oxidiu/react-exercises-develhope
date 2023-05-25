import React, { useState, useEffect } from "react";


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

    return <h1>{count}</h1>;
};


