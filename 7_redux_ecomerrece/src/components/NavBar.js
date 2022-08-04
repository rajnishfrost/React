import { useSelector } from "react-redux";

export default function NavBar() {
  const myState = useSelector((state) => state.savingData);

  return (
    <>
      <div
        style={{
          height: "5%",
          width: "94%",
          border: "2px solid black",
          display : "block",
          margin: "auto",
          marginTop : "1%",
          borderRadius: "10px",
        }}
      >
        <ul style={{ display: "flex" }}>
          <li style={{ marginLeft: "5%", listStyle: "none" }}>Home</li>
          <li style={{ marginLeft: "5%", listStyle: "none" }}>Mobile</li>
          <li style={{ marginLeft: "5%", listStyle: "none" }}>Laptop</li>
          <li style={{ marginLeft: "5%", listStyle: "none" }}>Clothings</li>
        </ul>
      </div>
<h1><center>Cart Items</center></h1>
      <div
        style={{
          height: "100%",
          width: "94%",
          display: "flex",
          flexWrap: "wrap",
          margin : "auto",
          border : "2px solid black"
        }}
      >
        {
          myState.rj.map((d,i)=>{
            return(
              <div key={i} style={{marginLeft : "3%" , marginTop : "1%"}}>
                <img src={d.image} alt="noImage" style={{ height: "100px", width: "100px" }} />
              </div>
            )
          })
        }
      </div>
    </>
  );
}
