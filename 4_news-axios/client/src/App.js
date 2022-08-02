import React, { useEffect, useState } from 'react';
import axios from 'axios'
// import Mark1GetRequest from './components/Mark1GetRequest';
// import Mark1PostRequest from './components/Mark1PostRequest';

function App() {
  const [first, setfirst] = useState([]);

  const fetch = async () => {
    await axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=397d65a80af24167aa9e2e9cc3eb2039").then(r => { setfirst(r.data.articles); })
  }
  useEffect(() => {
    fetch();
  }, [])
  
  return (
    <div style={{display : "flex" , flexWrap : "wrap" , justifyContent : "center" , backgroundColor : "burlywood"}}>
      {
      first && first.map((value , index)=>{
        return(
          <div style={{height:"auto" , width: "500px" , margin:"1%" , border:"2px solid black" , borderRadius :"10px" , backgroundColor : "wheat" }} key={index}>
            <img src={value.urlToImage} alt="noImage" style={{height:"200px" , width: "200px" , margin : "auto" , display  : "block" , marginTop : "2%" , borderRadius : "20px"}} />
            <h3 style={{textAlign : "center"}} >{value.title}</h3>
            <p style={{textAlign : "center"}} >{value.description}</p>
          </div>
        );
      })
    }
    </div>
  )
}

export default App