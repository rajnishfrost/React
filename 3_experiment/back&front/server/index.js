const express = require("express");
const app = express();
const path = require('path');

const port = 1999;
// app.post('/',express.static(path.join(__dirname + "/src")));

app.get('/abc' , (req,res)=>{
    res.sendFile(path.join(__dirname + "/src/apiData.json"))
})

app.listen(port , ()=>{
    console.log("Connection Successfull at port http://localhost:" + port)
});