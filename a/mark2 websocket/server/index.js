const http = require("http");
const express = require("express");
const cors = require("cors");
const socketIO = require("socket.io");
const app = express();
const server = http.createServer(app);
const io = socketIO(server);
const PORT = 5698;

app.use(cors());

const WebSocket = require("ws");
const base = "wss://stream.wazirx.com/stream";
const ws = new WebSocket(base);
let symbol = "ethinr";
app.post("/data/:sys", (req, res) => {
  console.log("post request calling");
  symbol = req.params.sys;
  console.log("Post Request Symbol ", symbol);
  ws.close();
  a();
});
function a(){
console.log("function a called");
  ws.onopen = () => {
    console.log(symbol);
    // ws.send(JSON.stringify({"event":"subscribe","streams":[`!ticker@arr`]}));
    ws.send(JSON.stringify({"event":"subscribe","streams":[`${symbol}@kline_1m`] }));
    };
  }

// setInterval(() => {
//   ws.close();
//   console.log("unsub");
// }, 1000*15);
function b(){

  io.on("connection", (socket) => {
    ws.onmessage = (e) => {
      const res = JSON.parse(e.data);
      const { data } = res;
      console.log(data);
      socket.emit("mark2", data);
    };
    // socket.on("mark3",(d)=>{
      //   console.log(d);
      // })
    });
  }
a();
b();
server.listen(PORT, () => {
  console.log(`Server Is Running On http://localhost:${PORT}`);
});
