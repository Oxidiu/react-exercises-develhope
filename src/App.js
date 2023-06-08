import './App.css';
import { ClickCounter } from './components/ClickerCounter';


function App() {
  const onCounterChange = (value) => {
    console.log(value);
  } 
  return (
    <div className="App">
      <ClickCounter onCounterChange={onCounterChange} />
    </div>
  );
}

export default App;
