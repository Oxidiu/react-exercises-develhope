import './App.css';
import React from 'react'
import { Welcome } from './components/Welcome';


function App() {
  return (
    <div className="App">
      <h2>9-conditional-rendering-if-less-than-65</h2>
      <Welcome name="Mortimer" age={100}/>
    </div>
  );
}

export default App;
