import React, { useState } from 'react';
import axios from 'axios'
import Mark1GetRequest from './components/Mark1GetRequest';
import Mark1PostRequest from './components/Mark1PostRequest';

function App() {
  const [first, setfirst] = useState([]);

  const fetch = async () => {
    await axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=20a25685522941679a860c05472ece93").then(r => { setfirst(r.data.articles); })
  }

  return (
    <>
      <button onClick={fetch}> Click </button>
    <div>
      {
      first.map((value)=>{
        return(
          <div style={{height:"400px" , width: "500px" , margin:"1%" , border:"2px solid black" , borderRadius :"10px" , }}>
            <h3>{value.title}</h3>
            <img src={value.urlToImage} alt="noImage" style={{height:"100px" , width: "300px"}} />
            <p>{value.description}</p>
          </div>
        );
      })
    }
    </div>
    <Mark1GetRequest/>
    <Mark1PostRequest/>
    </>
  )
}

export default App