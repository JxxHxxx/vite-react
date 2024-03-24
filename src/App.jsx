import { useState } from "react";

import "./App.css";
import { TodoHeader } from "./components/TodoHeader";
import TodoList from "./components/TodoList";
import { TodoInput } from "./components/TodoInput";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prevTodos) => {
      return [...prevTodos, todo]
    });
  };

  return (
    <div>
      <TodoHeader></TodoHeader>
      <TodoInput ontodoAdd={addTodo} />
      <TodoList todos={todos}></TodoList>
    </div>
  );
}

export default App;

