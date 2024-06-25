
import './App.css';
import Game from "./Game/Game.js"
import Chat from "./Chat/Chat.js"
import { useEffect, useState } from 'react';
import CommunicationHandler from './Chat/CommunicationHandler.js';

function App() {

  const [isConnected, setIsConnected] = useState(false)
  const [messages, setMessages] = useState(
    [
      // {
      //   time:0,
      //   author:{
      //     name:"some-dude"
      //   },
      //   content: "some message"
      // }, 
      // {
      //   time:0,
      //   author:{
      //     name:"some-dude"
      //   },
      //   content: "some message"
      // }
    ]
  );

  function handleConnectionChange(isConnected){
    setIsConnected(isConnected)
  }

  //TODO: Fix new messages not being added
  function handleNewMessageReceived(newMessage){
    setMessages(
      [ ...messages,
        {
        time:0,
        author:{
            name:"some-dude"
          },
        content: newMessage
        }
      ]
    )
  }

  const [messageHandler, setMessageHandler] = useState(
    new CommunicationHandler(
      handleConnectionChange,
      handleNewMessageReceived
    )
  )

  useEffect( ()=>{

    if(!isConnected){
       messageHandler.connect();
       console.log("connected?")
    }else{
        //messageHandler.sendMessage("pls work")
        console.log("should send")
    }

    },[isConnected]
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
