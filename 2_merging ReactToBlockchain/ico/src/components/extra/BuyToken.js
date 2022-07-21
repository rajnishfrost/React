import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from "react";
import ICO from "../../truffle/build/contracts/ICO.json";
import { ethers } from "ethers";
const contractAddress = ICO.networks['5777'].address;
const contractAbi = ICO.abi;

function BuyToken() {
  const [value, setValue] = useState([]);

  async function buyTokensWithEther() {
    await window.ethereum.request({method : "eth_requestAccounts"});
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const singer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, contractAbi, singer);
    const transaction = await contract.buyTokensWithEther(value,{value : ethers.utils.parseUnits(value.toString() , "ether")});
    // const tx = {
    //   from :`${account[0]}`,
    //   to : "0xf87b4de9A22853c38Eb4a02C72dD606e7bf3A215",
    //   value : ethers.utils.parseUnits(value.toString() , "ether"),
    //   gasPrice : gasPrice ,
    //   nonce : provider.getTransactionCount(account[0])
    // }
    // const tran = await singer.sendTransaction(tx);
    await transaction.wait();
  }
  const style = {
    width: "20%",
    marginLeft: "40%",
    marginTop: "1%"
  }
  return (
    <div style={style}>
      <Form >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <h4><center>Buy Tokens</center></h4>
          <Form.Control type="number" placeholder="Enter Enthers" onChange={(e) => { setValue(e.target.value) }} />
        </Form.Group>
        <Button variant="primary"  style={{ marginLeft: "40%" }} onClick={buyTokensWithEther}>
          Buy
        </Button>
      </Form>
    </div>
  );
}

export default BuyToken;