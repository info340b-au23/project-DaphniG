// TodoList.js
import React, { useState } from 'react';

function TodoList() {
  const initialTodos = ['Click to Add','Click to Add','Click to Add'];
  const [todos, setTodos] = useState(initialTodos);
  const [editIndex, setEditIndex] = useState(null);
  const [newTodo, setNewTodo] = useState('');

  const handleEditClick = (index) => {
    setEditIndex(index);
    setNewTodo(todos[index]);
  };

  const handleSaveClick = () => {
    if (editIndex !== null) {
      const updatedTodos = [...todos];
      updatedTodos[editIndex] = newTodo;
      setTodos(updatedTodos);
      setEditIndex(null);
    }
  };

  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  return (
    <div className="todo-list">
      <ul>
        {todos.map((todo, index) => (
          <li key={index} onClick={() => handleEditClick(index)}>
            {editIndex === index ? (
              <>
                <input
                  type="text"
                  value={newTodo}
                  onChange={handleInputChange}
                  onBlur={handleSaveClick}
                  autoFocus
                />
              </>
            ) : (
              <span>{todo}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;

