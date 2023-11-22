import React, { useState }  from 'react';

function TodoInput({ onAddTodo }) {


    const [newTodo, setNewTodo] = useState('');
  
    const handleInputChange = (e) => {
      setNewTodo(e.target.value);
    };
  
    const handleAddTodo = () => {
      if (newTodo.trim() !== '') {
        onAddTodo(newTodo);
        setNewTodo('');
      }
    };
  
    return (
      <div>
        <section className="flex-item">
        <input
          type="text"
          value={newTodo}
          onChange={handleInputChange}
          placeholder="Add a new ToDo"
        />
        <button onClick={handleAddTodo}>Add</button>
        </section>
      </div>
    );
  }
  
  export default TodoInput;