import { useEffect, useState } from "react";
import { useDispatch} from "react-redux";
import {incNum} from "../actions/index";

export default function Product() {
  const [product, setProduct] = useState([{}]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      console.log(data);
      setProduct(data);
    };
    fetchProducts();
  }, []);

  return (
    <div style={{ height : "100%" , width : "100%" , display : "flex" , flexWrap : "wrap" }}>
      {product.map((data) => {
        return (
          <div
            style={{border : "solid 2px grey" , height: "400px", width: "400px" , margin : "1%"}} >
            
            <img
              src={data.image}
              alt=""
              style={{ height: "300px", width: "300px" , marginLeft : "13%" , marginTop : "5%"}}
            />
            <p style={{ marginLeft: "40%" }}>
              Price {data.price} ETH
            </p>
            <button style={{ marginLeft: "40%" }} onClick={()=>dispatch(incNum())}>Add To Cart</button>
          </div>
        );
      })}
    </div>
  );
}
