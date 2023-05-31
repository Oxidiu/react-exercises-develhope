import './App.css';
import React from 'react'
import { Welcome } from './components/Welcome';

function App() {
  return (
    <div className="App">
      <h2>7-conditional-rendering-if-greater-than-18</h2>
      <Welcome name="Ion" age={17}/>
    </div>
  );
}

export default App;
