import React from 'react';
import { useSelector , useDispatch} from "react-redux";
import {savingCartData , increaseQty} from "../redux/actions/index";
import { useEffect, useState } from "react";

export default function WomensClothing() {
  const myState = useSelector((state) => state.savingAPI);
  const [product, setProduc] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    setProduc(myState.dj[0]);
  }, [myState])
  
  function filtering(d){
    console.log(d.category);
    return(
      d.category === "women's clothing"
    );
  }

  return (
    <div  style={{ height : "100%" , width : "100%" , display : "flex" , flexWrap : "wrap" }}>
    {
    product && product.filter(filtering).map((data , index) => {
      return (
        <div key={index} style={{height: "350px", width: "350px" , display : "block" , margin : "auto" , marginTop : "1%" ,border : "2px solid grey" , borderRadius : "100px"}} >
          <img src={data.image} alt="noImage" style={{ height: "250px", width: "250px" , margin : "auto" , display : "block" , marginTop : "4%"}}/>
          <p style={{textAlign : "center"}}>Price {data.price} ETH</p>
          <button style={{ display : "block" , margin : "auto" , backgroundColor : "rgb(0, 185, 185)" , height : "25px" , border : "none" , borderRadius : "10px"}} onClick={()=>{dispatch(savingCartData(data)); dispatch(increaseQty(data));}}>Add To Cart</button>
        </div>
      );
    })}
  </div>
  );
}
