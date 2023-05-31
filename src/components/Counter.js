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

//for this exercise I did nothing because I was using this from the beginning. the useEffect hook has embedded all of the 3 component lifecycle methods:
// componentDidMount (it runs the code once when the component mounts), componentDidUpdate (it watches the component in the square brackets), and componentWillUnmount (the return function).


