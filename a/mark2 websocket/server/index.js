const http = require("http");
const express = require("express");
const cors = require("cors");
const socketIO = require("socket.io");
const app = express();
const server =  http.createServer(app);
const io = socketIO(server);
const PORT = 5698;

app.use(cors());

io.on("connection" , (socket) => {
    console.log("log from backend");
    socket.on("test" , (data) => {
        console.log(data);
    })
})

server.listen(PORT , () => {
    console.log(`Server Is Running On http://localhost:${PORT}`);
})