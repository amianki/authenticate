const { ifError } = require("assert");
const express = require("express");
const app = express();
const port = 3300;

function verify (req,res,next){
    const q = req.query.q;
    if (q==undefined) {
        res.send("unauthorised")
    }
    else{
        next();
    }
}


app.get('/',verify,(req,res)=>{

    res.send("Authorised")
})

app.listen(port,()=>{
    console.log("app is running on port no"+ port)
})