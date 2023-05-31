import './App.css';
import React from 'react'
import { Welcome } from './components/Welcome';

function App() {
  return (
    <div className="App">
      <h2>4-props-second-prop</h2>
      <Welcome name="Oxide" age={26}/>
    </div>
  );
}

export default App;
