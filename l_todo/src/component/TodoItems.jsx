import edit from "./images/edit-text.png"
import tick from "./images/double-check.png"
import cross from "./images/delete-button.png"
import "./css/TodoItems.css"
import { useSelector , useDispatch} from 'react-redux'
import { deleteTodo , complete} from '../redux/actions/index'
import { useState } from 'react'



export default function TodoItems(props) {
  let myState = useSelector(state=>state);
  const activeUser = useSelector(state => state.saveUP.activeUser);  
  const [bool, setBool] = useState(true);
  const dispatch = useDispatch();

  return (
    <>
        <div className="sm">
      {
       props.category === "complete" ?  myState.todo.data.filter(d=>d.category===true).map((c,i)=>{
        console.log("complete");
         if(c.email === activeUser.email)
          return (
            <div className="subDiv3" key={i}>
              <button className='doneButton'>Done</button>
              <textarea name="" id="" cols="30" rows="5" defaultValue={c.desc} disabled={bool}></textarea>
              <div className="image">
                <img src={edit} alt="noImage"  className='etc' onClick={()=>setBool(false)}/>
                <img src={tick} alt="noImage"  className='etc' onClick={()=>dispatch(complete(c))}/>
                <img src={cross} alt="noImage" className='etc' onClick={()=>dispatch(deleteTodo(c.id))}/>
              </div>
            </div>
          )
        }): null 
      }
      {
        props.category=== "active" ? myState.todo.data.filter((d)=>d.category === false).map((d,i)=>{
          if(d.email === activeUser.email)
            return (
              <div className="subDiv3" key={i}>
                <button className='doneButton'>Done</button>
                <textarea name="" id="" cols="30" rows="5" defaultValue={d.desc} disabled={bool}></textarea>
                <div className="image">
                  <img src={edit} alt="noImage"  className='etc' onClick={()=>setBool(false)}/>
                  <img src={tick} alt="noImage"  className='etc' onClick={()=>dispatch(complete(d))}/>
                  <img src={cross} alt="noImage" className='etc' onClick={()=>dispatch(deleteTodo(d.id))}/>
                </div>
              </div>
            )
            }) : null
        }

        {
          props.category=== "all" ? myState.todo.data && myState.todo.data.map((d,i)=>{
            console.log("all");
            if(d.email === activeUser.email)
              return (
                <div className="subDiv3" key={i}>
                  <button className='doneButton'>Done</button>
                  <textarea name="" id="" cols="30" rows="5" defaultValue={d.desc} disabled={bool}></textarea>
                  <div className="image">
                    <img src={edit} alt="noImage"  className='etc' onClick={()=>setBool(false)}/>
                    <img src={tick} alt="noImage"  className='etc' onClick={()=>dispatch(complete(d))}/>
                    <img src={cross} alt="noImage" className='etc' onClick={()=>dispatch(deleteTodo(d.id))}/>
                  </div>
                </div>
              )
              }) : null
          }
    
        </div>
    </>
  )
}
