import React, { useState, useEffect } from 'react';
import './TodoModal.css';

const TodoModal = ({ isOpen, closeModal, todos, setTodos, isEditing, currentTodo }) => {
  const [todo, setTodo] = useState({ title: '', description: '', createdAt: '' });

  useEffect(() => {
    if (isEditing) {
      setTodo(currentTodo);
    }
  }, [isEditing, currentTodo]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTodo({
      ...todo,
      [name]: value,
      createdAt: new Date().toLocaleString(),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      setTodos(todos.map((t) => (t.id === currentTodo.id ? { ...todo, id: currentTodo.id } : t)));
    } else {
      setTodos([...todos, { ...todo, id: Date.now() }]);
    }
    setTodo({ title: '', description: '', createdAt: '' });
    closeModal();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            value={todo.title}
            onChange={handleChange}
            placeholder="Title"
            required
          />
          <input
            type="text"
            name="description"
            value={todo.description}
            onChange={handleChange}
            placeholder="Description"
            required
          />
          <div className="modal-buttons">
            <button type="submit">{isEditing ? 'Update' : 'Add'} To-Do</button>
            <button type="button" onClick={closeModal}>Close</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TodoModal;
