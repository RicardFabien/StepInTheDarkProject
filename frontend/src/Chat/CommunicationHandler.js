
class CommunicationHandler{

  constructor(handleConnectionChange, handleNewMessageReceived){
    this.handleConnectionChange = handleConnectionChange
    this.handleNewMessageReceived = handleNewMessageReceived
  }

  url = "ws://localhost:5000/echo";
  websocket = null;

  connect(){
    this.websocket = new WebSocket(
      this.url
    );

    this.websocket.onopen = (event) => {
      console.log("opening")
      this.handleConnectionChange(true)
    }

    this.websocket.onmessage = event => {
      console.log("ONMESSAGE")
      console.log(event.data)
      this.handleNewMessageReceived(event.data)
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


