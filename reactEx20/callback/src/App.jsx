import React, { useState } from 'react';
import useCounter from './useCounter';
import FilteredList from './FilteredList';

const App = () => {
  // Uso del custom hook useCounter
  const { count, increment, decrement, reset } = useCounter(0);

  // Lista di esempio con oggetti
  const [list, setList] = useState([
    { id: 1, name: 'Alice', age: 30 },
    { id: 2, name: 'Bob', age: 17 },
    { id: 3, name: 'Charlie', age: 20 },
    { id: 4, name: 'David', age: 15 },
  ]);

  return (
    <div>
      <h1>React Custom Hooks Example</h1>

      {/* Sezione del contatore */}
      <div>
        <h2>Contatore: {count}</h2>
        <button onClick={increment}>Incrementa</button>
        <button onClick={decrement}>Decrementa</button>
        <button onClick={reset}>Resetta</button>
      </div>

      {/* Sezione della lista filtrata */}
      <FilteredList list={list} />
    </div>
  );
};

export default App;
