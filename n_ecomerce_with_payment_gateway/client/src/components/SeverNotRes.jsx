import React from 'react'
import {Link} from "react-router-dom";

export default function SeverNotRes() {
  return (
    <div >
      <br />
      <br />
      <br />
        <h1 style={{textAlign : "center" , fontWeight : "bolder" , fontsize : "50px"}}> Sever Not Responding </h1>
        <Link to="/" ><p style={{textAlign : "center"}}> Go To Home</p> </Link>
    </div>
  )
}
