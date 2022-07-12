import React from 'react'

export const TodoItems = (props) => {
  const styleCSS ={
    "margin-left":"42%",
    "margin-top":'2%',
    "margin-bottom":'5%'
  }
  return (
    <>
    <div style={styleCSS}>
      <h4 className='my-4'>{props.todo.tittle}</h4>
      <p>{props.todo.desc}</p>
      <button className="btn btn-danger btn-sm" onClick={()=>{props.onDelete(props.todo)}}>Delete</button>
    </div>
    </>
  )
}
