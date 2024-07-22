import React from 'react';
import './TodoItem.css';

const TodoItem = ({ todo, todos, setTodos, editTodo }) => {
  const deleteTodo = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  return (
    <div className="todo-item">
      <table>
      <tr className="todo-header">
        <th className="header-field">Name</th>
        <th className="header-field">Description</th>
        <th className="header-field">Created At</th>
        <th className="header-field">Actions</th>
      </tr>
      <tr className="todo-details">
        <td className="todo-field">{todo.title}</td>
        <td className="todo-field">{todo.description}</td>
        <td className="todo-field">{todo.createdAt}</td>
        <td className="todo-actions">
          <button className="update-button" onClick={() => editTodo(todo)}>Update</button>
          <button className="delete-button" onClick={() => deleteTodo(todo.id)}>Delete</button>
        </td>
      </tr>
      </table>
    </div>
  );
};

export default TodoItem;
