import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../todoSlice";

const TodoForm = () => {
  const [todoText, setTodoText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoText.trim() === "") return;
    const newTodo = {
      id: Date.now(),
      text: todoText,
    };
    dispatch(addTodo(newTodo));
    setTodoText("");
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex justify-content-center">
      <div className="input-group d-flex justify-content-center mb-5 mt-2">
        <input
          className="form-control"
          style={{ maxWidth: "300px" }}
          type="text"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
          placeholder="Add a new todo..."
        />
        <button className="btn btn-dark" type="submit">
          Add
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
