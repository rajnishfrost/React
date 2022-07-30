import React from "react";
import { useState } from "react";
import GetBalance from "./GetBalance";
import ICO from "../truffle/build/contracts/ICO.json";
import { ethers } from "ethers";
import BuyToken2 from "./BuyToken2";
const contractAddress = ICO.networks["5777"].address;
const contractAbi = ICO.abi;

export default function BuyMainDiv() {
  const [items, setItems] = useState(0);
  const [value, setValue] = useState(0);
  const [ehter, setEther] = useState(0);

  async function gettingCheckValue() {
    if (typeof window.ethereum !== "undefined") {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const contract = new ethers.Contract(
        contractAddress,
        contractAbi,
        provider
      );
      try {
        let data = await contract.initialSupplyCheck();
        data = parseInt(data);
        data = data / 10 ** 18;
        return data;
      } catch (err) {
        console.log("Error : ", err);
      }
    }
  }
  async function gettingOwnerToken() {
    if (typeof window.ethereum !== "undefined") {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const contract = new ethers.Contract(
        contractAddress,
        contractAbi,
        provider
      );
      try {
        let data = await contract.balanceOf(
          "0xf87b4de9A22853c38Eb4a02C72dD606e7bf3A215"
        );
        data = parseInt(data);
        data = data / 10 ** 18;
        return data;
      } catch (err) {
        console.log("Error : ", err);
      }
    }
  }

  const handleChange = async (event) => {
    setItems(await calculatedToken(event.target.value));
    setEther(event.target.value);
  };
  async function calculatedToken(a) {
    let check = await gettingCheckValue();
    let ot = await gettingOwnerToken();
    a = parseFloat(a);
    let numTokens1 = 0;
    let numTokens2 = 0;
    let numTokens3 = 0;
    let e_numTokens1 = 0;
    let e_numTokens2 = 0;
    let e_numTokens3 = 0;
    let e_numTokens4 = 0;
    let rj = 0;

    if (a > (check * 25) / 100) {
      numTokens1 = a - (check * 25) / 100;
      e_numTokens1 = (check * 25) / 100;
      rj = rj + e_numTokens1;
      if (numTokens1 > (check * 50) / 100) {
        numTokens2 = numTokens1 - (check * 50) / 100;
        e_numTokens2 = (check * 25) / 100;
        rj = rj + e_numTokens2;
      } else {
        e_numTokens2 = numTokens1 / 2;
        rj = rj + e_numTokens2;
      }
      if (numTokens2 > (check * 75) / 100) {
        numTokens3 = numTokens2 - (check * 75) / 100;
        e_numTokens3 = (check * 25) / 100;
        rj = rj + e_numTokens3;
      } else {
        e_numTokens3 = numTokens2 / 3;
        rj = rj + e_numTokens3;
      }
      if (numTokens3 >= (check * 100) / 100) {
        e_numTokens4 = (check * 100) / 100;
        rj = rj + e_numTokens3;
      } else {
        e_numTokens4 = numTokens3 / 4;
        rj = rj + e_numTokens4;
      }
    } else {
      rj = rj + a;
    }
    if (ot > (check * 75) / 100 && ot <= (check * 100) / 100) {
      return rj;
    } else if (ot > (check * 50) / 100 && ot <= (check * 75) / 100) {
      return (rj = rj / 2);
    } else if (ot > (check * 25) / 100 && ot <= (check * 50) / 100) {
      return (rj = rj / 3);
    } else if (ot > (check * 1) / 100 && ot <= (check * 25) / 100) {
      return (rj = rj / 4);
    }
  }
  // async function abc() {
  //   setValue(await calculatedToken(1));
  // }
  // abc();
  return (
    <div
      style={{
        height: "650px",
        width: "450px",
        marginLeft: "68%",
        marginTop: "-26%",
        border: "2px solid white",
        borderRadius: "100px",
      }}
    >
      <h2 style={{ color: "white", marginLeft: "35%", marginTop: "7%" }}>
        Buy RJC
      </h2>
      <input
        type="number"
        onChange={handleChange}
        placeholder="Enter Value In Ethers"
        name="ehter"
        style={{
          height: "7%",
          width: "70%",
          color: "black",
          marginLeft: "14%",
          marginTop: "1%",
          border: "3px solid white",
          borderRadius: "10px",
        }}
      />
      {/* <p style={{ color: "white", marginLeft: "50%", marginTop: "3%" }}>
        1 Ether = {value} RJC Tokens
      </p> */}
      <input
        type="number"
        placeholder={items.toString()}
        name="token"
        style={{
          height: "7%",
          width: "70%",
          color: "black",
          marginLeft: "14%",
          marginTop: "2%",
          border: "3px solid white",
          borderRadius: "10px",
        }}
      />{" "}
      <BuyToken2 etherValue={ehter} />
      {<GetBalance />}
    </div>
  );
}
