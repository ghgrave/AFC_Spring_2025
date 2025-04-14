// SERVER
//3 parts to a server
//FOUNDATION
const express = require("express")
// create an instance of our application
const app = express()
// this will help with routing and params
const logger = require("morgan")
app.use(logger("dev"))

// what "station" (port) are we listening on?
const port = process.env.PORT || 3000;

//HANDLERS
// verb (route, cb())
app.get("/", (req, res)=>{
    res.send("Hello")
})

//LISTENER
app.listen(port, ()=>{
    console.log(`Bucketlist server running on port ${port}`)
})