import {useState } from "react";
import ICO from "../truffle/build/contracts/ICO.json";
import { ethers } from "ethers";
const contractAddress = ICO.networks['5777'].address;
const contractAbi = ICO.abi;

function GetBalance() {
  const[value , setValue] = useState(0);

  async function requestAccount(){
    await window.ethereum.request({method : "eth_requestAccounts"});
  }
  
  async function gettingTokenOfAccount() {
    if (typeof window.ethereum !== "undefined") {
      requestAccount();
      // const provider = new ethers.providers.JsonRpcProvider("HTTP://127.0.0.1:7545");
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const accc = await provider.send("eth_requestAccounts", []);
      const contract = new ethers.Contract(contractAddress, contractAbi, provider);
      try {
        let data = await contract.balanceOf(accc[0]);
        data = parseInt(data);
        data = data / 10 ** 18;
        setValue(data);
        console.log("Token : ", data);
      }
      catch (err) {
        console.log("Error : ", err);
      }
    }
  }
  return (
    <div>
        <button style={{color:"black" , marginLeft : "39%" , marginTop : "3%" ,border : "3px solid white" , borderRadius : "10px" , backgroundColor : "green" }} onClick={gettingTokenOfAccount}> Get Balance</button>
        <p style={{color : "white" , marginLeft : "30%" , marginTop : "3%"}}>You Have {value} RJC Tokens</p>
    </div>
  );
}

export default GetBalance;