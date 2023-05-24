import './App.css';
import React from 'react'
import { Welcome } from './components/Welcome';

function App() {
  return (
    <div className="App">
      <h2>6-props-extract-message</h2>
      <Welcome name="Azor" age={7}/>
    </div>
  );
}

export default App;
