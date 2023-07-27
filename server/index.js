const express = require("express");
const request = require("request")
const app =express()
const port = 9000
const cors = require('cors')
const TokenRoute = require("./routes/token") 

app.get("/",(req,res)=>{
    res.send("Karibu Kiprich")
})

app.get("/access_token",(req,res)=>{
    // Access Token
   
})
app.listen(port,()=>{
    console.log(`Daraja api is on port ${port}`)
})

app.use(cors());
app.use(express.json())
app.use("/token", TokenRoute)