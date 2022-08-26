import React from 'react';
import { useSelector , useDispatch} from "react-redux";
import {savingCartData , incNum} from "../redux/actions/index";
import { useEffect, useState } from "react";

export default function Electronics() {

  const myState = useSelector((state) => state.savingAPI);
  const [product, setProduct] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    setProduct(myState.dj[0]);
  }, [myState])
  
  function filtering(d){
    console.log(d.category);
    return(
      d.category === "electronics"
    );
  }

  return (
    <div  style={{ height : "100%" , width : "100%" , display : "flex" , flexWrap : "wrap" }}>
    {
    product && product.filter(filtering).map((data , index) => {
      return (
        <div key={index} style={{height: "350px", width: "350px" , display : "block" , margin : "auto" , marginTop : "1%" }} >
          <img src={data.image} alt="noImage" style={{ height: "250px", width: "250px" , margin : "auto" , display : "block" , marginTop : "4%"}}/>
          <p style={{textAlign : "center"}}>Price {data.price} ETH</p>
          <button style={{ display : "block" , margin : "auto" }} onClick={()=>{dispatch(savingCartData(data)); dispatch(incNum())}}>Add To Cart</button>
        </div>
      );
    })}
  </div>
  );
}
