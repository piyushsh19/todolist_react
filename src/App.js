import React, { useState, useEffect} from 'react';
import { Button, FormControl,InputLabel, Input } from '@material-ui/core';
import './App.css';
import Todo from "./Todo";
import db from './firebase';
import firebase from 'firebase';

function App() {

  const[todos, setTodos] = useState([]);
  const[input, setInput] = useState('');
  // console.log('hi', input);

  // when app loads, we need to listen to the db aand fetch new todos as they get added /removed

  useEffect(() => {
    // this code here fires when app loads
    db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => doc.data().todo)) // here we have array of object thats why we pass todo to return string
    })
    
  }, [])


  const addTodo = (event) => {
    event.preventDefault();

    //ad to db
    db.collection('todos').add({
      todo: input, //this return to snapshot
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    //console.log('add inputs');
    //setTodos([...todos, input]); //stor locally not in db
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
