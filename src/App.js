import './App.css';
import {TodoList} from "./components/TodoList"

function App() {
  // const [items, setItems] = useState(["exist", "eat", "dream", "sunbath"])
  const itemGenerator = (items, removeItem) => {
    return items.map((item, i) => <li key={i}>{item} <button key={`button ${i}`} onClick={removeItem}>Remove</button></li>)
  }
  
  
  return (
    <div className="App">
      <TodoList itemGenerator={itemGenerator}/>
    </div>
  );
}

export default App;
