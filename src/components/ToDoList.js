import React, { useState } from 'react';

function TodoList() {
  const maxTodos = 6;
  const initialTodos = ['cleanser', 'serum', 'add product'];
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
      if (newTodo.trim() === '') {
        updatedTodos.splice(editIndex, 1);
      } else {
        updatedTodos[editIndex] = newTodo;
      }
      setTodos(updatedTodos);
      setEditIndex(null);
    }
  };

  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleAddClick = () => {
    if (todos.length < maxTodos) {
      setTodos([...todos, '']);
      setEditIndex(todos.length); // Set edit index to the new todo
    }
  };

  return (
    <div className="todo-list ">
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
      <button className="tiny-plus" onClick={handleAddClick}>
        Add To Routine 
      </button>
    </div>
  );
}

export default TodoList;
