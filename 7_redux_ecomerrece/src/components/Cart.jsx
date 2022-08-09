import React from 'react';
import { useSelector , useDispatch} from "react-redux";
import {decNum, deleteCartData , increaseQty} from "../redux/actions/index";

export default function Cart() {
    const myState = useSelector((state) => state.cartData);
    const dispatch = useDispatch();
    
    return (
        <div style={{height: "100%",width: "94%"}}>
        {
          myState.rj.length === 0 ? <h1 style={{textAlign : "center"}}>No Items In Cart</h1>:
            myState.rj.map((d,i)=>{
                return(
              <div key={i} style={{marginLeft : "3%" , marginTop : "1%" , display : "flex"}}>
                <img  src={d.image} alt="noImage" style={{ height: "500px", width: "500px"}} />
                <div style={{width:"20%"  , marginLeft: "30%"}}>
                <h1 style={{marginTop : "5%"}}>{d.title}</h1>
                <p>{d.description}</p>
                <p>Category : {d.category}</p>
                {/* <p>Rating {d.rating.rate}</p> */}
                <p>Price {d.price} ETH </p>
                <div style={{display : "flex" , flexDirection : "row"}}>
                <button  style={{height : "30px" , width : "30px"}}>-</button>
                <h2 style={{marginTop:"-0.2%" , marginLeft : "1%" , marginRight : "1%"}}>{d.qty}</h2>
                <button onClick={()=>dispatch(increaseQty(d))} style={{height : "30px" , width : "30px"}}>+</button>
                </div>
                <p>Total Cost = {d.price}</p>
                <button onClick={()=>{dispatch(deleteCartData(d.id));dispatch(decNum())}}>Delete</button>
                </div>
              </div>
            )
          })
        }
      </div>
  )
}
