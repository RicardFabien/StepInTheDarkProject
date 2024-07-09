const express = require("express");
app = express();

const wsLibrary = require("ws");
const WebSocket = typeof wsLibrary.WebSocket;

var expressWs = require('express-ws')(app);
var websocketServer = expressWs.getWss();

port = 5000;

const messageList = []

app.get("/", (req,res)=>{
    res.send("It just works")
})

app.ws("/echo", (webSocket,req,client)=>{


    webSocket.on("message", msg=>{
        console.log("msg received")

        var parsedMessage = JSON.parse(msg)
        parsedMessage = formattingMessage(parsedMessage)
        addMessageToList(parsedMessage)

        broadcatsedMessage = JSON.stringify(parsedMessage)

        // broadcasting to all, sender included
        websocketServer.clients.forEach(
            function each(client) {
                client.send(broadcatsedMessage);
          });
    })

    webSocket.on("close", msg=> {
        console.log("closed")
    }) 


    console.log(req)
    handle_connection(webSocket);

})

app.listen(port,()=>{
    console.log("server on")
})

function handle_connection(webSocket){
    const data = getUnstriginfiedPreviousMessages()
      
    console.log("got msgs")
      
    webSocket.send(
        JSON.stringify({
            type: "connect",
            data: data
        })
    )
    console.log("sent old messages")
}

/**
 * 
 * @param {object} message_object 
 */
function formattingMessage(message_object){

    var new_object = {
        ...message_object
    }

    new_object.time = Date.now();

    return new_object
}

function addMessageToList(msgObject){
    messageList.push(msgObject)
}

function getPreviousMessages(amount=10){
    if(amount === 0) return

    
    const lastMessages = getUnstriginfiedPreviousMessages()
    const stringifiedMessages = lastMessages.map(msg => JSON.stringify(msg))

    return stringifiedMessages

}

function getUnstriginfiedPreviousMessages(amount=10){
    if(amount === 0) return
    return messageList.slice(-amount)
}


