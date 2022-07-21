import React, {useEffect , useState} from 'react';
import axios from 'axios'

function App() {

  axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=20a25685522941679a860c05472ece93").then()
  return (
    <div>{beData}</div>
  )
}

export default App