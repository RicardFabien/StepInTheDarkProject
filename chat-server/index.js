const express = require("express");
app = express();
var expressWs = require('express-ws')(app);

port = 3000;

app.get("/", (req,res)=>{
    res.send("It just works")
})

app.ws("/echo", (ws,req)=>{
    ws.on("open", msg=> {
        console.log("connecting")
    }) 
    ws.on("message", msg=>{
        console.log("echo: " + msg)
        ws.send("echo: " + msg)
    })
    // ws.on("close", msg=> {
    //     console.log("closed")
    // }) 
})

// app.ws('/echo', function(ws, req) {
//     ws.on('message', function(msg) {
//       console.log(msg);
//     });
//     console.log('socket');
//   });

app.listen(port,()=>{
    console.log("server on")
})

