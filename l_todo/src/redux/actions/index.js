export const saveUP = (data) => {
  return{
    type : "saveUP" ,
    data : data
  }
}

export const addTodo = (data) => {
  return{
    type : "addTodo" ,
    data : data
  }
}

export const deleteTodo = (data) => {
  return{
    type : "deleteTodo" , 
    data : data
  }
}

export const complete = (data) => {
  return{
    type : "complete" ,
    data : data
  }
}

export const logIn = (data) => {
  return{
    type : "logIn" ,
    data : data 
  }
}

export const signOut = () => {
  return{
    type : "signOut"
  }
}

