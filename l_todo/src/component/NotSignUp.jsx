import React from 'react'
import {Link} from "react-router-dom"

export default function NotSignUp() {
  return (
    <div>
        <h1 style={{textAlign:"center" , marginTop : "20%" , color : "white"}}>
            NOT SIGN UP TILL NOW
        </h1>
        <Link to="/"><p style={{textAlign:"center" , color : "white"}}> Sign Up </p></Link>
    </div>
  )
}
