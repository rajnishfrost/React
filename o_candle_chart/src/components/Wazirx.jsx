
import React, { useEffect, useState } from "react";
var apiData;

export default function Wazirx() {
  const [stock, setStock] = useState([{}]);
  
  useEffect(() => {
    apiData = fetch("https://api.wazirx.com/sapi/v1/ticker/24hr?symbol=wrxinr").then(d=>d.json().then(d=>console.log(d)));
    
  
    console.log("hello peter");
  }, [])
  // apiData = apiData.then(d=>d.json());

  return (
    <></>
  );
}
