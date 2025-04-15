// SERVER
//3 parts to a server
//FOUNDATION
const express = require("express")
// create an instance of our application
const app = express()

// logging tool
// this will help with routing and params
const logger = require("morgan")
app.use(logger("dev"))

// import fake data from mockdata.js file
const {bucketlist} = require("./mockData");


// what "station" (port) are we listening on?
const port = process.env.PORT || 3000;

// add body parser
app.use(express.json())
app.use(express.urlencoded({extended: false}))

//HANDLERS
// verb (route, cb())
// app.get("/", (req, res)=>{
//     res.redirect("/home")
// })
//
// app.get("/home", (req, res)=> {
//     res.send("I am the home page")
// })
//
// // parameters
// app.get("/api/bucket/:id", (req, res)=>{
//     console.log(req)
//     res.send(`Doggy route with parameter: ${req.params.id}`)
// })

// READ route
app.get("/api/bucket", (req, res)=>{
    res.json(bucketlist)
})

// CREATE data route
// how is data sent from client
let newId = 4
app.post("/api/bucket", (req, res)=>{
//     what is our goal??
//     add something to database
//     new bucket list item
    let newData = {
        id: newId++,
        description: req.body.description,
        isComplete: false,
    }
    bucketlist.push(newData)
    let receipt = newData
    res.json(receipt)
})

// DELETE route
app.delete("/api/bucket/:id", (req, res)=>{
//     what do we need to think about?
    let requestedId = Number(req.params.id)
//     findIndex()
    let bucketIndex = bucketlist.findIndex((element)=>{

        return element.id === requestedId
    })
    console.log("Index: ", bucketIndex)
    let removedObj = bucketlist.splice(bucketIndex, 1)
    // pretending this came from the database
    let receipt = removedObj
    res.json(receipt)
})


//LISTENER
app.listen(port, ()=>{
    console.log(`Bucketlist server running on port ${port}`)
})