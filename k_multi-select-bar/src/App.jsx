import React from "react";
import { useState } from "react";
import "./App.css"
import PIC from "./310792.png";


function App() {
  const [inputData, setInputData] = useState("");
  const [check, setCheck] = useState(false);
  const data = [
    { label: "Richhie Rich" },
    { label: "Scooby Dooby Doo" },
    { label: "Courage" },
    { label: "Dragon Ball Z" },
    { label: "Inazuma Eleven" },
    { label: "Ben 10" },
    { label: "Naruto" },
    { label: "Doraemon" },
    { label: "Chhota Bheem" },
    { label: "Kick Buttoski" },
    { label: "Kunfu Panda" },
    { label: "Beblayd" },
    { label: "Pokemon" },
    { label: "Hagemaru" },
    { label: "Kitrenshu" },
    { label: "Perman" },
    { label: "Ninja Hathori" },
    { label: "Sinchan" },
    { label: "Kid Vs Cat" },
  ];

  function handling(e, i, a) {
    setInputData(e.target.value);
    console.log(i, a);
  }

  function filttering(d) {
    if (inputData === "" && check === true) {
      console.log("a");
      return d;
    } else if (
      inputData !== "" &&
      d.label.toLowerCase().startsWith(inputData.toLocaleLowerCase())
    ) {
      console.log("b");
      return d;
    }
  }

  function settingTrue() {
    setCheck(true);
  }

  function settingFalse() {
    setCheck(false);
  }
  console.log(check);
  return (
      <div className="main" >
        
        <input
          onClick={settingTrue}
          placeholder="Search For Anime ..."
          onChange={handling}
          type="text"
          style={{
            display: "block",
            margin: "auto",
            marginTop: "5%",
            width: "30%",
            height: "25px",
            border: "2px Solid grey",
            borderRadius: "100px",
            marginBottom : "2%"
          }}
        />
        <div className="App" onClick={settingFalse}>
          <div style={{backgroundColor : "lightGrey" , width: "30%" ,  margin : "auto", opacity : "0.9" , overflow : "hidden" }}>
          {
          data.filter(filttering).map((d, i) => {
            return (
              <div key={i} >
                <p style={{ textAlign: "center"}}>{d.label}</p>
              </div>
            );
          })}
          </div>
        </div>
      </div>
  );
}

export default App;
