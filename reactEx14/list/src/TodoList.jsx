import React, { useState } from "react";

function TodoList() {
  // Stato per i todo e l'input
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  // Aggiungere un nuovo todo
  const handleAddTodo = () => {
    if (inputValue.trim()) {
      setTodos([...todos, inputValue.trim()]); // Aggiunge l'input a `todos`
      setInputValue(""); // Resetta l'input
    }
  };

  // Resettare tutti i todo
  const handleResetTodos = () => {
    setTodos([]);
  };

  // Rimuovere un todo specifico
  const handleRemoveTodo = (indexToRemove) => {
    setTodos(todos.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        {/* Input per aggiungere nuovi todo */}
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Aggiungi un nuovo Todo"
        />
        <button onClick={handleAddTodo}>Aggiungi</button>
        <button onClick={handleResetTodos}>Reset</button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleRemoveTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
