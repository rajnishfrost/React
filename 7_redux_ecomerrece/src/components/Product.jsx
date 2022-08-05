import { useEffect, useState } from "react";
import { useDispatch} from "react-redux";
import {savingData} from "../actions/index";
// import store from "../store"

export default function Product() {
  const [product, setProduct] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProduct(data);
    };
    fetchProducts();

  }, []);
// function abc(){
//   let a = store.getState();
//   console.log(a);
// }
  return (
    <div  style={{ height : "100%" , width : "100%" , display : "flex" , flexWrap : "wrap" }}>
      {
      product && product.map((data , index) => {
        return (
          <div key={index} style={{height: "350px", width: "350px" , display : "block" , margin : "auto" , marginTop : "1%" }} >
            <img src={data.image} alt="noImage" style={{ height: "250px", width: "250px" , margin : "auto" , display : "block" , marginTop : "4%"}}/>
            <p style={{textAlign : "center"}}>Price {data.price} ETH</p>
            <button style={{ display : "block" , margin : "auto" }} onClick={()=>dispatch(savingData(data))}>Add To Cart</button>
            {/* <button onClick={abc}>store</button> */}
            <p>{data.id} .</p>
          </div>
        );
      })}
    </div>
  );
}
