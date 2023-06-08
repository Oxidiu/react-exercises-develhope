import './App.css';
import {FunctionalLogin} from "./components/FunctionalLogin"

function App() {
  const onLogin = (state) => {
    console.log(state)
  }
  return (
    <div className="App">
      <FunctionalLogin onLogin={onLogin}/>
    </div>
  );
}

export default App;
