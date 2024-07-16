
import './App.css';
import Game from "./Game/Game"
import Chat from "./Chat/Chat"
import { useEffect, useState } from 'react';
import CommunicationHandler from './Chat/CommunicationHandler';
import React from 'react';


type Message = any;

function App() {

  /**
   * Indicates whether or not the webscoket is connected
   * Handled by a communication object, which may change it depending on it's status
   */
  const [isConnected, setIsConnected] = useState(false)

  /**
   * List of all messaged received by the user
   * Also contains the user's own messages
   * 
   * TODO: Updated on connect with messages the client had before the connection
   */
  const [messages, setMessages] = useState([] as Message[]);

  // Method is passed to communication object
  function handleConnectionChange(newIsCnnected: boolean){
    setIsConnected(newIsCnnected)
  }

  // Method is passed to communication object
  function handleNewMessageReceived(message: Message){

    console.log(message)

    if(message.type === "connect"){
      console.log("connect message")
      setMessages(message.data)
    }
    else{


      setMessages((prevMessages) => [...prevMessages, message])
    }

  }

  const [messageHandler] = useState(
   () => new CommunicationHandler(
      handleConnectionChange,
      handleNewMessageReceived
    )
  )


  useEffect( ()=>{
    messageHandler.connect();
    return () => {
      messageHandler.disconnect();
    }
    },[messageHandler]
  )

  /**
   * This method sends the message to the connected server
   * 
   * @param {string} message The message the user tries to send 
   */
  function sendMessage(message: Message){
    messageHandler.sendMessage(message)
  }

  return (
    <div className="App">
      <header>
        Stuff
      </header>

      <div className="app-body">
        <Game/>
        <Chat messages={messages} sendMessage={sendMessage}/>
      </div>
      
    </div>
  );
}

export default App;
