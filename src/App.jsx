import React, { useState } from 'react';
import TodoModal from './components/todoModal/TodoModal';
import TodoItem from './components/todoItem/TodoItem';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsEditing(false);
    setCurrentTodo({});
  };

  const editTodo = (todo) => {
    setIsEditing(true);
    setCurrentTodo(todo);
    openModal();
  };

  return (
    <div className="app-container">
      <h1 className="title">To-Do List</h1>
      <button className="add-button" onClick={openModal}>Add To-Do</button>
      <TodoModal
        isOpen={isModalOpen}
        closeModal={closeModal}
        todos={todos}
        setTodos={setTodos}
        isEditing={isEditing}
        currentTodo={currentTodo}
      />
      <ul className="todo-list">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            todos={todos}
            setTodos={setTodos}
            editTodo={editTodo}
          />
        ))}
      </ul>
    </div>
  );
};

export default App;
