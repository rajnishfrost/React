import React, { useEffect, useState } from 'react';

function App() {
  const [first, setfirst] = useState([]);
  
  const amit = async () => {
    try {
      const res = await fetch("/abc", {
        method: "GET",
      });
      const data = await res.json();
      setfirst(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    amit();
  }, [])
  
  return (
    <div style={{display : "flex" , flexWrap : "wrap" , justifyContent : "center" , backgroundColor : "burlywood"}}>
      {
      first && first.map((value , index)=>{
        return(
          <div style={{height:"auto" , width: "500px" , margin:"1%" , border:"2px solid black" , borderRadius :"10px" , backgroundColor : "wheat" }} key={index}>
            <img src={value.image} alt="noImage" style={{height:"200px" , width: "200px" , margin : "auto" , display  : "block" , marginTop : "2%" , borderRadius : "20px"}} />
            <h3 style={{textAlign : "center"}} >{value.title}</h3>
            <p style={{textAlign : "center"}} >{value.price} ETH</p>
          </div>
        );
      })
    }
    </div>
  )
}

export default App