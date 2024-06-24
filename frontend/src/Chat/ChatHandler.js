const WebSocket =  require('ws');
const prompt = require('prompt-sync')();

class ChatHandler{

  sendFirstMessage(){
    const ws = new WebSocket(
      "ws://localhost:3000/echo",
    );
    
    ws.on('open', () => {
      console.log("opening")
      ws.send("test")
    });
    
    ws.on("message", msg=>{
      console.log(msg)
    })
  }
}

export default ChatHandler;


