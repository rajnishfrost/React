import './App.css';
import Header from "./components/Header"
import { Todo } from "./components/Todo"
import React, { useState } from 'react'
import {Footer} from "./components/Footer"
import {AddTodo} from "./components/AddTodo"

function App() {
  const onDelete = (todo) => {
    // console.log("On Delete Functinality Working",todo);
    setTodos(todos.filter((e) => {
      return e !== todo;
    }))
  }

  const addTodo = (tittle  , desc)=>{
    let sno;
    if(todos.length == 0){
      sno=0
    }
    else{
      sno = todos[todos.length-1].sno + 1;
    }
     const myTodo = {
      sno : sno,
      tittle : tittle,
      desc : desc
     }
     setTodos([...todos,myTodo]);
     console.log(myTodo);
  }

  const [todos, setTodos] = useState([
    {
      sno: 0,
      tittle: "",
      desc: ""  
    }
  ]);

  return (
    <>
      <Header tittle="Rj Todo List" search={true} />
      <AddTodo addTodo={addTodo}/>
      <Todo todos={todos} onDelete={onDelete} />
      <Footer/>
    </>
  );
}

export default App;
