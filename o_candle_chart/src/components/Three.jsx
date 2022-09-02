import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ReactApexChart from 'react-apexcharts'

export default function Three() {
    const data = []
    const series = [{data}]
    var options = {
      series: series,
      chart: {
        type: 'candlestick',
        height: 350
      },
      title: {
        text: 'CandleStick Chart',
        align: 'left'
      },
      xaxis: {
        type: 'numeric'
      },
      yaxis: {
        tooltip: {
          enabled: true
        }
      },
    };
    
  
      const [stock ,setStock] = useState([])
    //   setInterval(()=>{
    //     let a = axios({method : "get", url : "https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1m&limit=1000"});
    //     setStock(a);
    // },1000*10)
    console.log(stock)
      
      function calIndex(){
  
        for(let i = 0 ; i<stock.length; i++){
          let timestamp = parseInt(stock.at);
          let time = new Date(timestamp).toLocaleString();
          let low = parseInt(stock.lowPrice);
          let open = parseInt(stock.openPrice)
          let close = parseInt(stock.lastPrice)
          let high = parseInt(stock.highPrice)
          data.push({x:time,y:[close,high,low,open]})
        }
      }
  calIndex();
  
    return (
      <ReactApexChart options={options} series={series} type="candlestick" height={'800px'} width={"100%"} />
    )
}
