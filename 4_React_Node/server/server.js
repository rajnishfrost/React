const express = require('express');
const app = express();

app.get("/api",(req,res)=>{
    res.json({"user":["u1","u2","u3"]})
});

app.listen(5000,()=>{
    console.log("http://localhost:"+5000);
})