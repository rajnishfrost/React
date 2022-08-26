import { useSelector } from "react-redux";
import {Link} from "react-router-dom"
import "./CSS/navBar.css"
import PIC from "../images/shopping-cart-icon-illustration-free-vector.webp"

export default function NavBar() {
  const myState2 = useSelector((state) => state.changeTheNumber);
  
  return (
    <>
      <div style={{height: "50px",width: "94%",border: "2px solid black",display : "block",margin: "auto",borderRadius: "10px" ,marginTop : "1%"}}>
        <ul style={{ display: "flex" }}>
          <Link className="returnLi" style={{ marginLeft: "0%", listStyle: "none" , textDecoration : "none" , color : "black" }} to="/">Home</Link>
          <Link className="returnLi" style={{ marginLeft: "5%", listStyle: "none" , textDecoration : "none" , color : "black" }} to="/mensClothing">Men's Clothing</Link>
          <Link className="returnLi" style={{ marginLeft: "5%", listStyle: "none" , textDecoration : "none" , color : "black" }} to="/womensClothing">Women's Clothing</Link>
          <Link className="returnLi" style={{ marginLeft: "5%", listStyle: "none" , textDecoration : "none" , color : "black" }} to="/jeweleries">Jeweleries</Link>
          <Link className="returnLi" style={{ marginLeft: "5%", listStyle: "none" , textDecoration : "none" , color : "black" }} to="/electronics">Electronics</Link>
          <Link to="/cart" style={{marginLeft : "45%" , marginTop : "-0.5%"}}><img src={PIC} alt="noImage" style={{height : "40px" , width : "50px"}}/></Link>
          <p style={{backgroundColor : "black" , color : "white" , width : "20px" , height : "20px" , borderRadius : "10px" , textAlign : "center" , marginTop : "-1%"}}>{myState2}</p>
        </ul>
      </div>
    </>
  );
}
