import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, toggleComplete } from "../todoSlice";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id} className={todo.completed ? "completed" : ""}>
          <span
            onClick={() => dispatch(toggleComplete(todo.id))}
            style={{ cursor: "pointer" }}
          >
            {todo.text}
          </span>
          <div className="d-flex justify-content-left">
            <button
              className="btn btn-success"
              onClick={() => dispatch(toggleComplete(todo.id))}
            >
              Finish
            </button>
            <button
              style={{ marginLeft: "15px" }}
              className="btn btn-danger"
              onClick={() => dispatch(removeTodo(todo.id))}
            >
              Remove
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
