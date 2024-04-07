import { useReducer, useState } from "react";

const todosReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case "REMOVE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    default:
      return state;
  }
};

export const TodoList = () => {
  const [state, dispatch] = useReducer(todosReducer, { todos: [] });
  const [inputValue, setInputValue] = useState("");

  const handleAddTodo = () => {
    if (inputValue.trim() !== "") {
      dispatch({
        type: "ADD_TODO",
        payload: { id: Date.now(), text: inputValue },
      });
      setInputValue("");
    }
  };

  const handleRemoveTodo = (id) => {
    dispatch({
      type: "REMOVE_TODO",
      payload: id,
    });
  };

  return (
    <div className="todoList">
      <h2>Problem # 2</h2>
      <ul>
        {state.todos.map((todo) => (
          <li
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            {todo.text}
            <button onClick={() => handleRemoveTodo(todo.id)}>x</button>
          </li>
        ))}
      </ul>
      <div className="add-todo">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleAddTodo}>Add todo</button>
      </div>
    </div>
  );
};
