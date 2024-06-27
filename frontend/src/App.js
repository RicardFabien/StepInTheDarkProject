
import './App.css';
import Game from "./Game/Game.js"
import Chat from "./Chat/Chat.js"
import { useEffect, useState } from 'react';
import CommunicationHandler from './Chat/CommunicationHandler.js';

function App() {

  const [isConnected, setIsConnected] = useState(false)
  const [messages, setMessages] = useState([]);


  function handleConnectionChange(isConnected){
    setIsConnected(isConnected)
  }

  function handleNewMessageReceived(message){
    var newMessage = {
      time:0,
      author:{
          name:"some-dude"
        },
      content: message
      }
      setMessages((prevMessages) => [...prevMessages, newMessage])
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

  function sendMessage(message){
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
