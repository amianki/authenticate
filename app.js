const express = require("express");
const app = express();
const port = 3300;

app.get('/',(req,res)=>{

    res.send("This is home page")
})

app.listen(port,()=>{
    console.log("app is running on port no"+ port)
})