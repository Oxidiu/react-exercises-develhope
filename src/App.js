import './App.css';
import React from 'react'
import { Welcome } from './components/Welcome';

function App() {
  return (
    <div className="App">
      <h2>2-props-passing-name-prop</h2>
      <Welcome name="Oxide" />
    </div>
  );
}

export default App;
