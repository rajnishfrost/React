import React from 'react'
import TradingViewWidget, { Themes, IntervalTypes } from 'react-tradingview-widget';

export default function TradingView() {
  return (
    <div class="chartview" style={{height: "90vh", width:"90vw"}}>
    <TradingViewWidget
      symbol="BINANCE:BTCUSDT"
      theme={Themes.DARK}
      autosize
      interval={IntervalTypes.D}
      timezone="UTC"
      style="1"
      locale="in"
      />
  </div>
  )
}
