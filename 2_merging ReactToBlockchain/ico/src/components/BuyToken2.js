import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ICO from "../truffle/build/contracts/ICO.json";
import { ethers } from "ethers";
const contractAddress = ICO.networks["5777"].address;
const contractAbi = ICO.abi;

export default function BuyToken2(props) {
  let value = props.etherValue;

  async function buyTokensWithEther() {
    await window.ethereum.request({ method: "eth_requestAccounts" });
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const singer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, contractAbi, singer);
    const transaction = await contract.buyTokensWithEther(value, {
      value: ethers.utils.parseUnits(value.toString(), "ether"),
    });
    await transaction.wait();
  }
  return (
    <div>
      <div>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <h4 style={{ color: "white", marginTop: "2%" }}>
              <center>Buy Tokens</center>
            </h4>
          </Form.Group>
          <ul>
            <li style={{ color: "white" }}>
              I agree to the Terms of Service (including purchaser's citizenship
              and/or residency restrictions) and Privacy Policy
            </li>
            <li style={{ color: "white" }}>
              I am not a citizen and/or resident of FATF blacklist countries
              and/or countries not recognized by the EU.
            </li>
            <li style={{ color: "white" }}>
              I am not a citizen/natural or a resident of the USA, a person or
              legal entity under the U.S. jurisdiction.
            </li>
          </ul>
          <Button
          className="btn-success"
          onClick={buyTokensWithEther}
            style={{
              height: "7%",
              width: "70%",
              color: "black",
              marginLeft: "14%",
              marginTop: "0%",
              border: "3px solid white",
              borderRadius: "10px",
              backgroundColor : "green"
            }}
          >
            Buy
          </Button>
        </Form>
      </div>
    </div>
  );
}
