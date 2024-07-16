import { error } from "console";

class CommunicationHandler{

  handleConnectionChange:Function = () => {
    throw error("Something is missing")
  }
  handleNewMessageReceived:Function = () => {
    throw error("Something is missing")
  }

  constructor(handleConnectionChange:Function, handleNewMessageReceived:Function){
    this.handleConnectionChange = handleConnectionChange
    this.handleNewMessageReceived = handleNewMessageReceived
  }

  url = "ws://localhost:5000/echo";
  // creating the WebSocket object 
  // launches a connection attempt 
  websocket: WebSocket | null = null;

  connect(){

    if(this.websocket){
      return
    }
    
    // creating the WebSocket object 
    // launches a connection attempt 
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

  /**
   * This method put the message in a object that is then sent to the server 
   * This method contains the logic that is related directly to communication 
   * (username, authorisation token...).
   * Any logic that pertains to modifying the user input should be handled upstream.
   * 
   * @param {string} messageText  
   */
  sendMessage(messageText:string){
    var newMessage = {
      time:0,
      author:{
          name:"some-dude"
        },
      content: messageText
      }

      if(this.websocket){
        this.websocket.send(JSON.stringify(newMessage))
      }
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


