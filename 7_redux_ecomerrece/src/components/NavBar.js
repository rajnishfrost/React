import React from 'react'
import {useSelector} from "react-redux";

export default function NavBar() {
  const myState = useSelector((state)=> state.changeTheNumber);

  return (
    <div style={{height:"5%" , width :"94%" , border:"2px solid black" , margin : "1%" , borderRadius : "10px"}}>
        <ul style={{display:"flex" }}>
            <li style={{marginLeft:"5%" , listStyle : "none"}}>Home</li>
            <li style={{marginLeft:"5%" , listStyle : "none"}}>Mobile</li>
            <li style={{marginLeft:"5%" , listStyle : "none"}}>Laptop</li>
            <li style={{marginLeft:"5%" , listStyle : "none"}}>Clothings</li>
            <li style={{marginLeft:"65em" , listStyle: "none"}}>Cart = {myState}</li>
        </ul>
    </div>
  )
}
