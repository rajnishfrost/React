// import CandleStick from "./components/CandleStick";
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import Wazirx from "./components/Wazirx";
import TradingView from "./components/TradingView";
// import Lightweight from "./components/Lightweight";
// import { Websocket } from "./components/Websocket";
// import Drwaing from "./components/Drwaing";

function App() {
  return (
    <div className="App">
      {/* <Websocket/> */}
      {/* <ToastContainer autoClose={2000}  limit={1} position="top-center" hideProgressBar={false} newestOnTop={true} closeOnClick rtl={false} pauseOnFocusLoss draggable={true} pauseOnHover/>
      <CandleStick/> */}
      {/* <Wazirx/> */}
      <TradingView/>
      {/* <Lightweight/> */}
      {/* <Drwaing/> */}
    </div>
  );
}

export default App;
