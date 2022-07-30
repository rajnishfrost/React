import React from 'react'
import {useSelector} from "react-redux";

export default function NavBar() {
  const myState = useSelector((state)=> state.changeTheNumber);

  return (
    <div style={{height:"5%" , width :"94%" , border:"2px solid black" , margin : "1%"}}>
        <ul style={{display:"flex"}}>
            <li style={{marginLeft:"5%" }}>Home</li>
            <li style={{marginLeft:"5%" }}>Mobile</li>
            <li style={{marginLeft:"5%" }}>Laptop</li>
            <li style={{marginLeft:"5%" }}>Clothings</li>
            <li style={{marginLeft:"60%" , textDecoration : "none"}}>Cart = {myState}</li>
        </ul>
    </div>
  )
}
