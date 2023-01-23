const express = require("express")
const app = express()

app.get("/",(req, res) =>{
    res.json({message:"hola"})
})

const PORT = 3003

app.listen(PORT, () =>{
    console.log("App is listening on port 3003")
})