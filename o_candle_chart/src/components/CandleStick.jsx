import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import "./candlestick.css";
import { toast } from "react-toastify";

function CandleStick() {
  const [stock, setStock] = useState([]);
  const [symbol, setSymbol] = useState("wrxinr");
  const [first, setfirst] = useState([]);
  const [inputData, setInputData] = useState("");
  const [time, setTime] = useState("5m");
  const [VHL, setVHL] = useState([]);
  const [count , setCount] = useState(1);
  const data = [];
  const series = [{ data }];

  var options = {
    legend: {
      show: true,
      floating: true,
    },
    chart: {
      toolbar: {
        show: true,
        offsetX: 1,
        offsetY: 0,
        tools: {
          download: false,
          selection: true,
          zoom: true,
          zoomin: true,
          zoomout: true,
          pan: true,
          reset: false | '<img src="/static/icons/reset.png" width="20">',
          customIcons: [],
        },
        autoSelected: "zoom",
      },
      type: "candlestick",
      height: 350,
    },
    xaxis: {
      type: "datetime",
      labels: {
        datetimeFormatter: {
          year: "yyyy",
          month: "MMM 'yy",
          day: "dd MMM",
          hour: "HH:mm",
        },
      },
    },
    yaxis: {
      tooltip: {
        enabled: true,
      },
    },
    // annotations: {
    //   yaxis: [
    //     {
    //       y: VHL.highPrice,
    //       borderColor: "Black",
    //       label: {
    //         borderColor: "black",
    //         style: {
    //           color: "#fff",
    //           background: "black",
    //         },
    //         text: `${VHL.highPrice}`,
    //       },
    //     },
    //   ],
    // },
    
  };
  // setInterval(() => {
  //   axios({
  //     method: "get",
  //     url: `https://api.wazirx.com/sapi/v1/klines?symbol=${symbol}&limit=150&interval=${time}`,
  //   }).then((res) => {
  //     setStock(res.data);
  //   });
  // }, 1000*1);

  setInterval(() => {
    setCount(0);
    console.log(count);
  }, 1000*10);

  useEffect(() => {
    axios({
      method: "get",
      url: `https://api.wazirx.com/sapi/v1/klines?symbol=${symbol}&limit=150&interval=${time}`,
    }).then((res) => {
      setStock(res.data);
    });
  }, [time, symbol , count]);

  useEffect(() => {
    axios({
      method: "get",
      url: `https://api.wazirx.com/sapi/v1/exchangeInfo`,
    }).then((res) => {
      setfirst(res.data.symbols);
    });
  }, []);

  useEffect(() => {
    axios({
      method: "get",
      url: `https://api.wazirx.com/sapi/v1/ticker/24hr?symbol=${symbol}`,
    }).then((res) => {
      if (res.data === null) {
        setVHL({
          lowPrice: "0.0",
          highPrice: "0.0",
          lastPrice: "0.0",
          volume: "0.0",
        });
        toast.error("This Coin Is Removed From WazirX");
      } else {
        setVHL(res.data);
      }
    });
  }, [symbol]);

  function calIndex() {
    for (let i = 0; i < stock.length; i++) {
      let time = parseInt(stock[i][0] * 1000 + 19800000);
      let low = parseFloat(stock[i][2]);
      let open = parseFloat(stock[i][1]);
      let close = parseFloat(stock[i][4]);
      let high = parseFloat(stock[i][3]);
      data.push({ x: time, y: [close, high, low, open] });
    }
  }
  calIndex();

  function handling(e) {
    setInputData(e.target.value);
  }
  function filttering(d) {
    if (
      inputData === "" ||
      d.baseAsset.toLowerCase().includes(inputData.toLocaleLowerCase())
    ) {
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
        <div style={{ height: "700px", overflowY: "scroll" }}>
          {first &&
            first.filter(filttering).map((d, i) => {
              return (
                <div key={i}>
                  <p
                    id="list"
                    onClick={() => setSymbol(d.symbol)}
                    style={{ textAlign: "center" }}
                  >
                    {d.symbol}
                  </p>
                </div>
              );
            })}
        </div>
      </div>
      <div>
        <div style={{ display: "flex" }}>
          <div>
            <h3
              style={{
                textAlign: "center",
                color: "green",
                marginLeft: "1rem",
              }}
            >
              {symbol.toLocaleUpperCase()}
            </h3>
          </div>
          <div style={{ marginLeft: "80%" }}>
            <h3>Last Price ₹{VHL.lastPrice}</h3>
          </div>
        </div>
        <hr />
        <div style={{ display: "flex", marginLeft: "1%" }}>
          <p id="list" onClick={() => setTime("1m")}>
            1M
          </p>
          <p
            id="list"
            style={{ marginLeft: "1%" }}
            onClick={() => setTime("5m")}
          >
            5M
          </p>
          <p
            id="list"
            style={{ marginLeft: "1%" }}
            onClick={() => setTime("15m")}
          >
            15M
          </p>
          <p
            id="list"
            style={{ marginLeft: "1%" }}
            onClick={() => setTime("30m")}
          >
            30M
          </p>
          <p
            id="list"
            style={{ marginLeft: "1%" }}
            onClick={() => setTime("1h")}
          >
            1H
          </p>
          <p
            id="list"
            style={{ marginLeft: "1%" }}
            onClick={() => setTime("4h")}
          >
            4H
          </p>
          <p
            id="list"
            style={{ marginLeft: "1%" }}
            onClick={() => setTime("1d")}
          >
            1D
          </p>
          <p
            id="list"
            style={{ marginLeft: "1%" }}
            onClick={() => setTime("1w")}
          >
            1W
          </p>
          <div>
            <div style={{ display: "flex", marginLeft: "900px" }}>
              <p>Volume &nbsp;</p>
              <p style={{ fontWeight: "bold" }}>{VHL.volume} &nbsp;</p>
              <p>&nbsp; High &nbsp;</p>
              <p style={{ fontWeight: "bold" }}>{VHL.highPrice} &nbsp;</p>
              <p>&nbsp; low &nbsp;</p>
              <p style={{ fontWeight: "bold" }}>{VHL.lowPrice} &nbsp;</p>
            </div>
          </div>
        </div>
        <hr />
        <ReactApexChart
          id="apex-chart"
          options={options}
          series={series}
          type="candlestick"
          height={"600px"}
          width={"1650px"}
        />
      </div>
    </div>
  );
}

export default CandleStick;
