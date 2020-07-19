import React, { useState} from 'react';
import { Button } from '@material-ui/core';

import './App.css';

function App() {

  const[todos, setTodos] = useState(['this 1', 'second']);
  const[input, setInput] = useState('');
  console.log('hi', input);

  const addTodo = (event) => {
    event.preventDefault();
    console.log('ho gya');
    setTodos([...todos, input]);
    setInput('');
    
  }

  return (
    <div className="App">
      
      <form>
      <h1>Todo-List</h1>
      <input value = {input} onChange = { event => setInput(event.target.value)}/>
      <Button disabled={!input} type="submit" onClick={addTodo}  variant="contained" color="secondary">
        Add Item
      </Button>
      </form>
      

      <ul>
        {todos.map(todo => (
          <li>{todo}</li>
        ))}
      </ul>

    </div>
  );
}

export default App;
