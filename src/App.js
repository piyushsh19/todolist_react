import React, { useState, useEffect} from 'react';
import { Button, FormControl,InputLabel, Input } from '@material-ui/core';
import './App.css';
import Todo from "./Todo";
import db from './firebase';

function App() {

  const[todos, setTodos] = useState([]);
  const[input, setInput] = useState('');
  // console.log('hi', input);

  // when app loads, we need to listen to the db aand fetch new todos as they get added /removed

  useEffect(() => {
    // this code here fires when app loads
    db.collection('todos').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => doc.data().todo))
    })
    
  }, [])


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
      <FormControl>
        <InputLabel>Write a Todo </InputLabel>
        <Input value = {input} onChange = { event => setInput(event.target.value)}/>
      </FormControl>
      <Button disabled={!input} type="submit" onClick={addTodo}  variant="contained" color="secondary">
        Add Item
      </Button>
      </form>
      

      <ul>
        {todos.map(todo => (
          <Todo text = {todo}/>
        ))}
      </ul>

    </div>
  );
}

export default App;
