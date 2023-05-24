import './App.css';
import React from 'react'
import { Welcome } from './components/Welcome';


function App() {
  return (
    <div className="App">
      <Welcome name="Ovi" age={30}/> {/* Age is not displayed */}
      <Welcome name="John" age={20}/>
    </div>
  );
}

export default App;
