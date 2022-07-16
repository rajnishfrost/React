import React from 'react';
import NavigationBar from './components/NavigationBar';
import GetBalance from './components/GetBalance';
import BuyToken from './components/BuyToken';
import CalculateTokens from './components/CalculateTokens';
// import {useState } from "react";
// import ICO from "./truffle/build/contracts/ICO.json";
// import { ethers } from "ethers";
// const contractAddress = ICO.networks['5777'].address;
// const contractAbi = ICO.abi;


function App() {
  // const[value , setValue] = useState();

  // async function requestAccount(){
  //   await window.ethereum.request({method : "eth_requestAccounts"});
  // }
  // requestAccount();

  // async function getToken() {
  //   if (typeof window.ethereum !== "undefined") {
  //     // const provider = new ethers.providers.JsonRpcProvider("HTTP://127.0.0.1:7545");
  //     const provider = new ethers.providers.Web3Provider(window.ethereum)
  //     const accc = await provider.send("eth_requestAccounts", []);
  //     const contract = new ethers.Contract(contractAddress, contractAbi, provider);
  //     try {
  //       let data = await contract.getBalance(accc[0]);
  //       data = parseInt(data);
  //       data = data / 10 ** 18;
  //       console.log("Token : ", data);
  //     }
  //     catch (err) {
  //       console.log("Error : ", err);
  //     }
  //   }
  // }
  const style = {
    backgroundColor: "rgb(205, 245, 255)",
    position: "absolute",
    height: "100%",
    width: "100%"
  }
  return (
   <div style={style}>
    <NavigationBar/>
    <CalculateTokens/>
    <GetBalance/>
    <BuyToken/>
   </div>
  );
}

export default App;
