const express = require("express");
const request = require("request")
const app =express()
const port = 9000
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

app.use(express.json())
app.use("/token", TokenRoute)