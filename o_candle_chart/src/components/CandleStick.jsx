import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ReactApexChart from 'react-apexcharts'

function CandleStick() {
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
      type: 'datetime'
    },
    yaxis: {
      tooltip: {
        enabled: true
      }
    },
  };
  

    const [stock ,setStock] = useState([])
    useEffect(()=>{
      axios({
        method:'get',
        url:'https://api.binance.com/api/v3/klines?symbol=ETHUSDT&interval=1m&limit=100'

      }).then((res)=>{
        
        setStock(res.data)
      })
      console.log(stock[0]);
    },[stock])
    
    function calIndex(){

      for(let i = 0 ; i<stock.length; i++){
        let timestamp = parseInt(stock[i][0]);
        let time = new Date(timestamp).toLocaleString();
        let low = parseInt(stock[i][3]);
        let open = parseInt(stock[i][1])
        let close = parseInt(stock[i][4])
        let high = parseInt(stock[i][2])
        data.push({x:time,y:[close,high,low,open]})
      }
    }
calIndex();

  return (
    <ReactApexChart options={options} series={series} type="candlestick" height={'800px'} width={"100%"} />
  )
}

export default CandleStick