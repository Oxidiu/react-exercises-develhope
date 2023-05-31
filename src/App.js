import './App.css';
import { Counter } from './components/Counter';


function App() {
  return (
    <div className="App">
      <Counter initialValue={0} pace={2} interval={2000} />
    </div>
  );
}

export default App;
