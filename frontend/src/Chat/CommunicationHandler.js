
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
      console.log("ONMESSAGE",event)
      this.handleNewMessageReceived(JSON.parse(event.data))
    }

    this.websocket.onclose  = (event) => {
      console.log("closing")
    }
  }

  sendMessage(message){
    console.log("trying to send")

    var newMessage = {
      time:0,
      author:{
          name:"some-dude"
        },
      content: message
      }

    this.websocket.send(JSON.stringify(newMessage))
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


