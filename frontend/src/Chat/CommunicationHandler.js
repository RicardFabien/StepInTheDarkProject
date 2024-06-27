
class CommunicationHandler{
  constructor(handleConnectionChange, handleNewMessageReceived){
    this.handleConnectionChange = handleConnectionChange
    this.handleNewMessageReceived = handleNewMessageReceived
  }

  url = "ws://localhost:5000/echo";
  websocket = null;

  connect(){

    if(this.websocket){
      return
    }
      
    this.websocket = new WebSocket(
      this.url
    );

    this.websocket.onopen = (event) => {
      console.log("opening")
      this.handleConnectionChange(true)
    }

    this.websocket.onmessage = event => {
      console.log("ONMESSAGE",event.data)
      this.handleNewMessageReceived(event.data)
    }

    this.websocket.onclose  = (event) => {
      console.log("closing")
    }
  }

  sendMessage(message){
    console.log("trying to send")

    this.websocket.send(message)
  }

  disconnect(){
    if (this.websocket){
      this.websocket.close()
      this.websocket = null
      console.log("disconnecting")
    }
  }

}

export default CommunicationHandler;


