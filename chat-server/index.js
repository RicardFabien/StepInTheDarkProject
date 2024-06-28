const express = require("express");
app = express();

const wsLibrary = require("ws");
const WebSocket = typeof wsLibrary.WebSocket;

var expressWs = require('express-ws')(app);
var websocketServer = expressWs.getWss();

port = 5000;

app.get("/", (req,res)=>{
    res.send("It just works")
})

app.ws("/echo", (webSocket,req,client)=>{
    webSocket.on("open", ()=> {
        console.log("connecting")
    }) 

    webSocket.on("message", msg=>{
        websocketServer.clients.forEach(
            function each(client) {
                client.send(JSON.stringify(msg));
          });
    })

    webSocket.on("close", msg=> {
        console.log("closed")
    }) 
})

app.listen(port,()=>{
    console.log("server on")
})

