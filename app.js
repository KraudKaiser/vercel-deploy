const express = require("express")
const app = express()

app.get("/",(req, res) =>{
    res.send("hola")
})

const PORT = 3003

app.listen(PORT, () =>{
    console.log("App is listening on port 3003")
})