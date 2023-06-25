import React from 'react';
import useCounter from './useCounter';
import { Link } from 'react-router-dom';

const Counter = () => {
  const { count, increment, decrement, reset } = useCounter(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      <br />
      <Link to="/">Home</Link>
      <br />
      <Link to="/users/oxidiu">User</Link>
      <br />
      <Link to="/counter">Counter</Link>
      <br />
      <Link to="/universalTruth">Universal Truth</Link>
    </div>
  );
};

export default Counter;