import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import "./candlestick.css";

function CandleStick() {
  const [stock, setStock] = useState([]);
  const [symbol, setSymbol] = useState("BNBUSDT");
  const [first, setfirst] = useState([]);
  const [inputData, setInputData] = useState("");
  const [time , setTime] = useState("1h");

  const data = [];
  const series = [{ data }];

  var options = {
    chart: {
      type: "candlestick",
      height: 350,
    },
    xaxis: {
      type: "datetime",
    },
    yaxis: {
      tooltip: {
        enabled: true,
      },
    },
  };

  useEffect(() => {
    axios({
      method: "get",
      url: `https://api.binance.com/api/v3/klines?symbol=${symbol}&interval=${time}&limit=100`,
    }).then((res) => {
      setStock(res.data);
    });
  }, [stock]);

  useEffect(() => {
    axios({
      method: "get",
      url: `https://api1.binance.com/api/v3/exchangeInfo`,
    }).then((res) => {
      setfirst(res.data.symbols);
    });
  }, []);

  function calIndex() {
    for (let i = 0; i < stock.length; i++) {
      let time = parseInt(stock[i][0]) + 19800000;
      // let time = new Date(timestamp).toLocaleString();
      let low = parseFloat(stock[i][3]);
      let open = parseFloat(stock[i][1]);
      let close = parseFloat(stock[i][4]);
      let high = parseFloat(stock[i][2]);
      data.push({ x: time, y: [close, high, low, open] });
    }
  }
  calIndex();

  // console.log(first);

  function handling(e, i, a) {
    setInputData(e.target.value);
    console.log(i, a);
  }
  function filttering(d) {
    if (inputData === "" || d.baseAsset.toLowerCase().startsWith(inputData.toLocaleLowerCase())){
      return d;
    } 
  }


  return (
    <div style={{ display: "flex" }}>
      <div>
        <input
          placeholder="Search For Coin"
          onChange={handling}
          type="text"
          style={{
            marginTop: "1%",
            width: "",
            height: "25px",
            border: "2px Solid grey",
            borderRadius: "100px",
          }}
        />
        <div style={{ height : "600px" , overflowY : "scroll" }}>
          {first &&
            first.filter(filttering).map((d, i) => {
              return (
                <div key={i} >
                  <p id="list" onClick={()=>setSymbol(d.baseAsset.concat("USDT"))} style={{ textAlign: "center" }}>
                    {d.baseAsset.concat("USDT")}
                  </p >
                </div>
              );
            })}
        </div>
      </div>

      <div>
        <div style={{display : "flex" , justifyContent : "center"}}>
          <p id="list" onClick={()=>setTime("1m")}>1M</p>
          <p id="list" style={{marginLeft : "1%"}} onClick={()=>setTime("5m")}>5M</p>
          <p id="list" style={{marginLeft : "1%"}} onClick={()=>setTime("15m")}>15M</p>
          <p id="list" style={{marginLeft : "1%"}} onClick={()=>setTime("30m")}>30M</p>
          <p id="list" style={{marginLeft : "1%"}} onClick={()=>setTime("1h")}>1H</p>
          <p id="list" style={{marginLeft : "1%"}} onClick={()=>setTime("4h")}>4H</p>
          <p id="list" style={{marginLeft : "1%"}} onClick={()=>setTime("1d")}>1D</p>
          <p id="list" style={{marginLeft : "1%"}} onClick={()=>setTime("1M")}>1M</p>
        </div>
        <ReactApexChart
          options={options}
          series={series}
          type="candlestick"
          height={"600px"}
          width={"1650px"}
        />
        <h1 style={{ textAlign: "center", color: "green" }}>{symbol}</h1>
      </div>
    </div>
  );
}

export default CandleStick;
