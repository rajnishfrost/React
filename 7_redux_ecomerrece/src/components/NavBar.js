import { useSelector } from "react-redux";
import { useEffect , useState } from "react";

export default function NavBar() {
  const myState = useSelector((state) => state.savingData);
  const [count, setCount] = useState(0);

function abc(){
 setCount(count+1);
}  
console.log(count);
  return (
    <>
      <div style={{height: "5%",width: "94%",border: "2px solid black",display : "block",margin: "auto",marginTop : "1%",borderRadius: "10px",}}>
        <ul style={{ display: "flex" , justifyContent : "center" }}>
          <li style={{ marginLeft: "5%", listStyle: "none" }}>Home</li>
          <li style={{ marginLeft: "5%", listStyle: "none" }}>Mobile</li>
          <li style={{ marginLeft: "5%", listStyle: "none" }}>Laptop</li>
          <li style={{ marginLeft: "5%", listStyle: "none" }}>Clothings</li>
        </ul>
      </div>
      <button onClick={abc}>peter</button>
            <h1 style={{textAlign : "center"}}>Cart Items</h1>
      <div style={{height: "100%",width: "94%",display: "flex",flexWrap: "wrap",margin : "auto"}}>
        {
          myState.rj.map((d,i)=>{
            return(
              <div key={i} style={{marginLeft : "3%" , marginTop : "1%"}}>
                <img src={d.image} alt="noImage" style={{ height: "100px", width: "100px" }} />
                {
                   <p style={{textAlign : "center"}}>{0}</p> 
                }
              </div>
            )
          })
        }
      </div>
        <hr />
    </>
  );
}
