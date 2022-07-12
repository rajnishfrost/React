import React from 'react'
import {TodoItems} from './TodoItems'
export const Todo = (props) => {
  return (
    <div className='container'>
      <h1 className='text-center'>Todos List</h1>
      <hr />
      {
        props.todos.map((todo)=>{
          return <TodoItems todo={todo} key={todo.sNo} onDelete={props.onDelete}/>
        })
      }
    </div>
  )
}
