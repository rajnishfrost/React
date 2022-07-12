import './App.css';
import Header from "./myComponent/Header"
import { Todo } from "./myComponent/Todo"
import React, { useState } from 'react'
import {Footer} from "./myComponent/Footer"

function App() {
  const onDelete = (todo) => {
    // console.log("On Delete Functinality Working",todo);
    setTodos(todos.filter((e) => {
      return e !== todo;
    }))
  }
  const [todos, setTodos] = useState([
    {
      sNo: 1,
      tittle: "Goto The Market",
      desc: "Done This Job As Soon As Possible 1"

    },
    {
      sNo: 2,
      tittle: "Goto The Austrailia",
      desc: "Done This Job As Soon As Possible 2"

    },
    {
      sNo: 3,
      tittle: "Goto The Pakistan",
      desc: "Done This Job As Soon As Possible 3"

    }
  ]);

  return (
    <>
      <Header tittle="Rj Todo List" search={true} />
      <Todo todos={todos} onDelete={onDelete} />
      <Footer/>
    </>
  );
}

export default App;
