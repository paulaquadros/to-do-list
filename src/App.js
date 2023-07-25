import React from "react";

import "./App.css";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <div>
      <h1 className="d-flex justify-content-center mt-5">Todo List</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
};

export default App;
