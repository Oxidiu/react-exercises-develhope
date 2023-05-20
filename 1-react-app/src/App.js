import './App.css';
import React from 'react'
import { Welcome } from './components/Welcome';
// 2-props-passing-name-prop


function App() {
  // 2-props-passing-name-prop
  
  return (
    <div className="App">
      <h1>The exercises for the React Module</h1>
      
      <h2>1-create-react-app</h2>
      <div className="hello">Hello</div>
      
      <h2>2-props-passing-name-prop</h2>
      <Welcome name="Oxide" />

      <h2>3-props-default-value</h2>
      <Welcome/>

      <h2>4-props-second-prop</h2>
      <Welcome name="Oxide" age={26}/>

      <h2>5-props-JSX-expression</h2>
      <Welcome name={<strong>Oxide</strong>}/>

      <h2>6-props-extract-message</h2>
      <Welcome name="Azor" age={7}/>

      <h2>7-conditional-rendering-if-greater-than-18</h2>
      <Welcome name="Ion" age={17}/>

      <h2>8-conditional-rendering-if-prop-is-present</h2>
      <Welcome name="Eusebiu"/>

      <h2>9-conditional-rendering-if-less-than-65</h2>
      <Welcome name="Mortimer" age={100}/>
    </div>

    
  );
}

export default App;
