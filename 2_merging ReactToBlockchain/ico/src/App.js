import React from 'react'
// import Web3 from 'web3'
// import detectEthereumProvider from "@metamask/detect-provider"
// import {useState , useEffect} from "react"


function App() {

  // const [web3Api , setWeb3Api] = useState({
  //   provider : null,
  //   web3 : null
  // }); 
  // const [account , setAccount] = useState(null);
  // useEffect(() => {
  //   const loadProvider = async()=>{
  //     const provider = await detectEthereumProvider();
  //     if(provider){
  //       provider.request({method:"eth-requestAccounts"});
  //       setWeb3Api({
  //         web3: new Web3(provider),
  //         provider
  //       }); 
  //     }
  //     else{
  //       console.error("Please Install Metamask")
  //     }
  //   }
  //   loadProvider();
  // }, [])

  return (
    <>
    <p>hello peter</p>
    <button onClick={async()=>{
      const accounts = await window.ethereum.request({method:"eth_requestAccounts",});
      console.log(accounts);
    }}>Click To Connect Metamask</button>
    </>
  );
}

export default App;
