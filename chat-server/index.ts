import  express from "express"
const app = express();

import expressWs from "express-ws"

var instance = expressWs(app);
var wsApp = instance.app;
var websocketServer = instance.getWss();

const port = 5000;

type Message = any;
type CommRequest = any;

//TODO: add correct type
const messageList: Message[] = []

app.get(
    "/", (req,res)=>{
    res.send("It just works")
})

wsApp.ws("/echo", (webSocket,req,client)=>{


    webSocket.on("message", (msg: string)=>{
        console.log("msg received")

        var commRequest:CommRequest = JSON.parse(msg)
        var parsedMessage: Message = formattingMessage(commRequest)
        addMessageToList(parsedMessage)

        var broadcastedMessage: string = JSON.stringify(parsedMessage)

        // broadcasting to all, sender included
        websocketServer.clients.forEach(
            function each(client) {
                client.send(broadcastedMessage);
          });
    })

    webSocket.on("close", msg=> {
        console.log("closed")
    }) 


    console.log(req)

    webSocket.close
    handle_connection(webSocket);

})

app.listen(port,()=>{
    console.log("server on")
})

function handle_connection(webSocket: import("ws")){
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
function formattingMessage(message_object: Message){

    var new_object = {
        ...message_object
    }

    new_object.time = Date.now();

    return new_object
}

function addMessageToList(msgObject: Message){
    messageList.push(msgObject)
}

function getPreviousMessages(amount=10){
    if(amount === 0) return

    
    const lastMessages = getUnstriginfiedPreviousMessages()

    var stringifiedMessages:string[] = [];

    if(lastMessages){
        stringifiedMessages = lastMessages.map(
            msg => JSON.stringify(msg)
        )
    }
    

    return stringifiedMessages

}

function getUnstriginfiedPreviousMessages(amount=10){
    if(amount === 0) return
    return messageList.slice(-amount)
}


