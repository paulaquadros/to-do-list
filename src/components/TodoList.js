import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, toggleComplete } from '../todoSlice';

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id} className={todo.completed ? 'completed' : ''}>
          <span
            onClick={() => dispatch(toggleComplete(todo.id))}
            style={{ cursor: 'pointer' }}
          >
            {todo.text}
          </span>
          <button onClick={() => dispatch(removeTodo(todo.id))}>Remove</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;