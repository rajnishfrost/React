import { React, useState} from 'react';
import "./css/TodosMainPage.css";
import { useDispatch ,useSelector } from 'react-redux';
import {addTodo , signOut} from "../redux/actions/index"
import TodoItems from "./TodoItems";
import { Link } from 'react-router-dom';

export default function TodosMainPage() {
  const activeUser = useSelector(state => state.saveUP.activeUser);
  const [a, setA] = useState({email : activeUser.email , desc : "" , id : 0 , category : false});
  const [cat , setCat] = useState("active");
  const dispatch = useDispatch();

  const handleClick = () => {  
    dispatch(addTodo(a));
    setA({email : activeUser.email , desc : "" , id : 0 , category : false});
  }

  function signOutHandle(){
    dispatch(signOut());
  }

  return (
    <div>
<Link to="/logIn"><button className='signOutButton' onClick={signOutHandle}>Sign Out</button></Link>
      <h2 style={{color : "white" , textAlign : "center"}}>Hello {activeUser.nickname}...</h2>
      <div className='div1'>
        <h1 className='heading'>Todo App</h1>
        <div className='subDiv1'>
          <input type="text" value={a.desc} onChange={(e) => setA({email : activeUser.email , desc : e.target.value , id : 0 , category : false})} />
          <p onClick={handleClick}>+</p>
        </div>
        <div className='subDiv2'>
          <button onClick={()=>setCat("active")}>Active</button>
          <button onClick={()=>setCat("complete")}>Complete</button>
          <button onClick={()=>setCat("all")}>All</button>
        </div>
      </div>
      <hr />
      <TodoItems category = {cat}/>
    </div>
  )
}
