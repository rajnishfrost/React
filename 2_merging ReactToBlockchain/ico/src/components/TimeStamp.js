import React, { useState, useRef, useEffect } from "react";
import Pic from "./imgs/1000_F_355820871_wqotVNBgHk855YTNVizzqEzpfCctfGmS.jpg";

import { ethers } from "ethers";
import ICO from "../truffle/build/contracts/ICO.json";
const contractAddress = ICO.networks["5777"].address;
const contractAbi = ICO.abi;

export default function TimeStamp() {
  const [items, setItems] = useState(0);

  //=========================================================================
  // We need ref in this, because we are dealing
  // with JS setInterval to keep track of it and
  // stop it when needed
  const Ref = useRef(null);

  let date = new Date();
  let cDays = date.getDate();
  let cHours = date.getHours();
  let cMinutes = date.getMinutes();
  let cSeconds = date.getSeconds();
  let totalSeconds;
  let fDays = 30;
  let fHours = 12;
  let fMinutes = 0;
  let fSeconds = 0;

  if (fHours > cHours && fDays > cDays) {
    fDays = fDays - cDays;
    fHours = fHours - cHours;
    fMinutes = fMinutes - cMinutes;
    fSeconds = fSeconds - cSeconds;
    totalSeconds = fHours * 3600 + fMinutes * 60 + fSeconds;
  } else if (fHours < cHours && fDays <= cDays) {
    fDays = 0;
    fHours = 0;
    fMinutes = 0;
    fSeconds = 0;
    totalSeconds = 0;
    console.log("hello peter");
  }
  else if (fHours > cHours && cDays === fDays) {
    fDays = fDays - cDays;
    fHours = fHours - cHours + 24;
    fMinutes = fMinutes - cMinutes + 60;
    fSeconds = fSeconds - cSeconds + 60;
    totalSeconds = fHours * 3600 + fMinutes * 60 + fSeconds;
  } else if (fHours <= cHours && fDays > cDays) {
    if (fDays === cDays + 1) {
      fDays = fDays - cDays - 1;
      fHours = fHours - cHours + 24;
      fMinutes = fMinutes - cMinutes;
      fSeconds = fSeconds - cSeconds;
      totalSeconds = fHours * 3600 + fMinutes * 60 + fSeconds;
    } else {
      fDays = fDays - cDays - 1;
      fHours = fHours - cHours + 24;
      fMinutes = fMinutes - cMinutes;
      fSeconds = fSeconds - cSeconds;
      totalSeconds = fHours * 3600 + fMinutes * 60 + fSeconds;
    }
  } else if (fHours < cHours && cDays === fDays) {
    fDays = fDays - cDays;
    fHours = fHours - cHours + 24;
    fMinutes = fMinutes - cMinutes + 60;
    fSeconds = fSeconds - cSeconds + 60;
    totalSeconds = fHours * 3600 + fMinutes * 60 + fSeconds;
  }

  // The state for our timer
  const [timer, setTimer] = useState("00 : 00 : 00");

  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / 1000 / 60 / 60) % 24);

    return {
      total,
      hours,
      minutes,
      seconds,
    };
  };

  const startTimer = (e) => {
    let { total, hours, minutes, seconds } = getTimeRemaining(e);
    if (total >= 0) {
      // update the timer
      // check if less than 10 then we need to
      // add '0' at the beginning of the variable
      setTimer(
        (hours > 9 ? hours : "0" + hours) +
        " : " +
        (minutes > 9 ? minutes : "0" + minutes) +
        " : " +
        (seconds > 9 ? seconds : "0" + seconds)
      );
    }
  };

  const clearTimer = (e) => {
    // If you adjust it you should also need to
    // adjust the Endtime formula we are about
    // to code next
    setTimer("00:00:00");

    // If you try to remove this line the
    // updating of timer Variable will be
    // after 1000ms or 1sec
    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      startTimer(e);
    }, 1000);
    Ref.current = id;
  };

  const getDeadTime = () => {
    let deadline = new Date();

    // This is where you need to adjust if
    // you entend to add more time

    deadline.setSeconds(deadline.getSeconds() + totalSeconds);
    return deadline;
  };

  // We can use useEffect so that when the component
  // mount the timer will start as soon as possible

  // We put empty array to act as componentDid
  // mount only
  useEffect(() => {
    clearTimer(getDeadTime());
  }, []);

  // Another way to call the clearTimer() to start
  // the countdown is via action event from the
  // button first we create function to be called
  // by the button
  const onClickReset = () => {
    clearTimer(getDeadTime());
  };
  //===================================================================

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
        setItems(data);
      } catch (err) {
        console.log("Error : ", err);
      }
    }
  }
  // gettingOwnerToken();
  return (
    <>
      <div
        style={{
          height: "500px",
          width: "400px",
          marginLeft: "27%",
          marginTop: "-36%",
        }}
      >
        <img
          src={Pic}
          alt="error"
          style={{
            height: "100px",
            marginLeft: "33%",
            marginTop: "5%",
            border: "10px solid green",
            borderRadius: "100px",
          }}
        />
        <h4 style={{ color: "white", marginLeft: "36%", marginTop: "5%" }}>
          Buy RJC
        </h4>
        <p style={{ color: "white", marginLeft: "31%", marginTop: "1%" }}>
          Sell Will Active After
        </p>
        <div style={{ marginLeft: "13%" }}>
          <h1 style={{ color: "white" }}>
            0{fDays} : {timer}
          </h1>
          <p style={{ color: "white" }}>
            {" "}
            &nbsp; Days &nbsp; &nbsp; &nbsp; &nbsp; Hours &nbsp; &nbsp; &nbsp;
            Minutes &nbsp; &nbsp; Seconds
          </p>
        </div>
        <p style={{ color: "white", marginLeft: "24%" }}>
          From July30/2022 12:00 PM
        </p>
        <p style={{ color: "white", marginLeft: "24%" }}>
          To August01/2022 11:59 AM
        </p>
        <button
          style={{
            backgroundColor: "green",
            border: "2px solid white",
            borderRadius: "100px",
            marginLeft: "36%",
          }}
        >
          Active now
        </button>
        {/* <h5 style={{ color: "white", marginLeft: "25%", marginTop: "2%" }}>
          TOKEN LEFT {items}
        </h5> */}
      </div>
    </>
  );
}
