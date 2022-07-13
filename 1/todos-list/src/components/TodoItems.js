import React from 'react'

export const TodoItems = (props) => {
 
  return (
    <>
    <div>
      <h4 className='my-4'>{props.todo.tittle}</h4>
      <p>{props.todo.desc}</p>
      {props.todo.sno==0 ? "":<button className="btn btn-danger btn-sm" onClick={()=>{props.onDelete(props.todo)}}>Delete</button>}
      </div>
    </>
  )
}
