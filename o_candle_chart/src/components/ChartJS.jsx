import {React , useState , useEffect} from 'react';
import Chart from "react-google-charts";
import "./some.css"
export default function ChartJS() {
  const [first, setfirst] = useState([]);

  let data = [];
  data = [
    ['Date', 'l', 'o', 'c', 'h']
  ];
  
  
  
  useEffect(() => {
    async function abc(){
      let a = await fetch("https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1m&limit=100");
      a = await a.json();
      setfirst(a);
    }
    abc();  
  }, [first])

  function calIndex(){

    for(let i = 0 ; i<first.length; i++){
      let timestamp = parseInt(first[i][0]);
      new Date().toLocaleString();
      let time = new Date(timestamp).toLocaleString();
      let low = parseInt(first[i][3]);
      let open = parseInt(first[i][1])
      let close = parseInt(first[i][4])
      let high = parseInt(first[i][2])
      data.push([time , low , open , close , high])
    }
  }
 
  
  // calIndex();
  setInterval(calIndex(), 1000);
  
  return (
    <div className="container mt-5">
              <Chart 
                width={'100%'}
                height={450}
                chartType="CandlestickChart"
                loader={<div>Loading Chart</div>}
                data={data}
                scroll = {true}
                options={{

                  focusTarget : "datum",
                  candlestick: {
                    fallingColor: { strokeWidth: 0, fill: '#a52714' }, // red
                    risingColor: { strokeWidth: 0, fill: '#0f9d58' }   // green
                  },
                  hAxis:{
                    title : "Binance",
                    
                  },
                  tooltip: { isHtml: true },   
                  legend: { position: 'none' },
                  bar: { groupWidth: '50%' },
                  colors: ['#A61D4C']
                }}
                rootProps={{ 'data-testid': '1' }}
              />             
          </div>  
  )
}
