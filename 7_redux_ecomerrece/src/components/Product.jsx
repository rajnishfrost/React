import { useEffect, useState } from "react";
import { useDispatch} from "react-redux";
import {savingData} from "../actions/index";
import { savingAPI , incNum} from "../actions/index";
import "./CSS/product.css"

export default function Product() {
  const [product, setProduct] = useState([]);
  const dispatch = useDispatch();
  
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProduct(data);
      dispatch(savingAPI(data));
    };
    fetchProducts();

  }, );


  return (
    <div  style={{ height : "100%" , width : "100%" , display : "flex" , flexWrap : "wrap" }}>
      <div className="bgImage" style={{width : "100%" ,height : "600px" , marginTop : "1%"}}>
        <h1 style={{fontSize : "50px" , color : "white" , marginLeft : "10%"}}>SUMMER SALE</h1>
        <br />
        <p style={{color : "white" , marginLeft : "10% " }}>DON'T COMPROMISE ON STYLE ! FET FLAT 30% OFF</p>
        <p style={{color : "white" , marginLeft : "10% " }}>FOR NEW ARRIVALS</p>
        <h1 style={{color : "white" , marginLeft : "10%"}}> Shop Now</h1>
      </div>
      {
      product && product.map((data , index) => {
        return (
          <div className="returnMainDiv" key={index} style={{height: "400px", width: "400px" , display : "block" , margin : "auto" , marginTop : "5%"}} >
            <img src={data.image} alt="noImage" style={{ height: "300px", width: "300px" , margin : "auto" , display : "block" , marginTop : "4%"}}/>
            <p style={{textAlign : "center"}}>Price {data.price} ETH</p>
            <button style={{ display : "block" , margin : "auto" }} onClick={()=>{dispatch(savingData(data)); dispatch(incNum())}}>Add To Cart</button>
          </div>
        );
      })}
    </div>
  );
}
