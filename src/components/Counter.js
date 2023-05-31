import React, { useState, useEffect } from "react";


export const Counter = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
        setCount(prevCount => prevCount + 1);
        }, 1000);
        // interval()
        return () => {
        clearInterval(interval);
        };
    }, []);

    return <h1>{count}</h1>;
};

// export class Counter extends React.Component {
//     state = {
//         count: 0
//     }
//     constructor(props) {
//         super(props)
//         setInterval (() => {
//             this.setState((state) => {
//                 return {
//                     count: state.count + 1
//                 }
//                 })
//         }, 1000)
//     }
//     render() {
//         return <div>
//             <h1>{this.state.count}</h1>
//         </div>
//     }
// }
