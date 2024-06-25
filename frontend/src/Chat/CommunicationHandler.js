//const WebSocket =  require('ws');
//const prompt = require('prompt-sync')();

class CommunicationHandler{

  constructor(setIsConnected) {
    this.setIsConnected = setIsConnected;
  }

  url = "ws://localhost:5000/echo";
  websocket = null;

  connect(){
    this.websocket = new WebSocket(
      this.url
    );

    this.websocket.onopen = (event) => {
      console.log("opening")
      this.setIsConnected(true)
    }

    this.websocket.onmessage = event => {
      console.log(event.data)
    }

    this.websocket.onclose  = (event) => {
      console.log("closing")
    }
  }

  sendMessage(message){
    this.websocket.send(message)
  }

}

export default CommunicationHandler;


