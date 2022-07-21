import React from 'react';
import NavigationBar from './components/NavigationBar';
import TimeStamp from './components/TimeStamp';
import BuyMainDiv from './components/BuyMainDiv';
import Timer from './components/Timer';


function App() {
  const style = {
    backgroundColor: "rgb(0, 0, 0)",
    position: "absolute",
    height: "100%",
    width: "100%",
  }
  return (
   <div style={style}>
    <NavigationBar/>
    {<TimeStamp/>}
    {<BuyMainDiv/>}
    <br />
    <br />
    <br />
    <br />
    <hr style={{color:"green" , height : "5px"}} />
    <br />
    <hr style={{color:"red" , height : "5px"}} />
    {<Timer/>}
   </div>
  );
}

export default App;
