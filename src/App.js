import "./App.css";
import FilterStatus from "./components/FilterStatus";
import MyComponent from "./components/MyComponent";
import { TodoList } from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <MyComponent headerText="Hello Test">
        <p>This is children</p>
      </MyComponent>

      <div className="todoListContainer">
        <TodoList />
      </div>

      <div>
        <FilterStatus />
      </div>
    </div>
  );
}

export default App;
