
import './App.css';
import {useSelector , useDispatch} from "react-redux";
import {incNum , decNum} from "./actions/index"
import Cart from './components/Cart';

function App() {
  const myState = useSelector((state)=> state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <>
    <Cart/>
    <div style={{marginLeft:"40%" , marginTop : "10%"}}>
    <h1>Hello Peter</h1>
    <button onClick={()=>dispatch(decNum())} style={{width:"100px" , height :"100px" , fontSize:"85px"}}>-</button>
    <input value={myState} style={{width:"100px" , height :"100px", fontSize:"90px" ,   textAlign: "center"}}/>
    <button onClick={()=>dispatch(incNum())} style={{width:"100px" , height :"100px" ,fontSize:"85px"}}>+</button>
    </div>
    </>
  );
}

export default App;
