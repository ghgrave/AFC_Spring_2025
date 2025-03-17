// Foundation
// gives us access to express AND everything it has to offer
const express = require("express")
// creates an instance of server BUT we are calling it "app"
const app = express()
// depending on what port the host uses
const port = process.env.PORT || 3000


// front end - event listeners
// route handlers
// root route
// What is the VERB? GET, POST, PUT, DELETE
// What is the route?
app.get("/", (req, res)=>{
    res.json("My first!!! server!!!")
})

app.get("/fruit/:doggy/cat", (req, res)=>{
    res.send(req.params.doggy)
})

//      /
//      /{param}


// // as long as your methods are different
// // you can use the same route!!!
// app.post("/", ()=>{
//
// })
//
// app.delete("/", ()=>{
//
// })
//
// app.put("/", ()=>{
//
// })

// listener
app.listen(port, ()=>{
    console.log(`Express demo is running on port ${port}`)
})
