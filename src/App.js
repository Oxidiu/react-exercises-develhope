import './App.css';
import {Login} from "./components/Login"

function App() {
  const onLogin = (state) => {
    console.log(state)
  }
  return (
    <div className="App">
      <Login onLogin={onLogin}/>
    </div>
  );
}

export default App;
