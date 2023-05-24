import './App.css';
import React from 'react'
import { Welcome } from './components/Welcome';

function App() {
  return (
    <div className="App">
      <h2>5-props-JSX-expression</h2>
      <Welcome name={<strong>Oxide</strong>}/>
    </div>
  );
}

export default App;
