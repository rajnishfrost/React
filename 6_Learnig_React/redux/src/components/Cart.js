import React from 'react'
import {useSelector , useDispatch} from "react-redux";

export default function Cart() {
    const myState = useSelector((state)=> state.changeTheNumber);
  return (
    <div>
        <p>{myState}</p>
    </div>
  )
}
