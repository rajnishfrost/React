import React from 'react'
import  ReactDOM  from 'react-dom'

const modal = {
    position : "fixed" ,
    // transform : "translate(-50% , -50%)" , 
    top : "10%" ,
    left : "80%" ,
    backgroundColor : "white" ,
    padding : "50px" ,
    zIndex : 1000
}

export default function Modal({open , children , onClose}) {
    if(!open) return null
  return ReactDOM.createPortal(
  <>
  <div style={{position : "fixed" , top : "0" , left : "0" , bottom : "0" , right : "0" , backgroundColor : "rgba(0,0,0,.7)" , zIndex : 1000}}>
    <div style={modal}>
        <button onClick={onClose}> close modal</button>
        {children}
    </div>
  </div>
  </> , document.getElementById('portal')
  )
}
