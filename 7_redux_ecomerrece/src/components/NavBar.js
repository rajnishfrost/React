import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";


export default function NavBar() {
  const myState = useSelector((state) => state.savingData);

myState.rj.map((d)=>{console.log(d)})

  // console.log( myState);
  
  return (
    <>
    <div
      style={{
        height: "5%",
        width: "94%",
        border: "2px solid black",
        margin: "1%",
        borderRadius: "10px",
      }}
    >
      <ul style={{ display: "flex" }}>
        <li style={{ marginLeft: "5%", listStyle: "none" }}>Home</li>
        <li style={{ marginLeft: "5%", listStyle: "none" }}>Mobile</li>
        <li style={{ marginLeft: "5%", listStyle: "none" }}>Laptop</li>
        <li style={{ marginLeft: "5%", listStyle: "none" }}>Clothings</li>
      </ul>
    </div>

    <div style={{ height : "100px" , width : "95%" , display : "flex" , flexWrap : "wrap" , border : "2px solid black" }}>
      {
        // data.length===0 || data.length === undefined ? console.log("data is zero or undefine") : console.log("not Zero")
      
      }
    </div>
        </>
  );
}
