
import './App.css';
import Game from "./Game/Game.js"
import Chat from "./Chat/Chat.js"
import { useState } from 'react';

function App() {
  

  const [messages, setMessages] = useState(
    [
      {
        time:0,
        author:{
          name:"some-dude"
        },
        content: "some message"
      }, 
      {
        time:0,
        author:{
          name:"some-dude"
        },
        content: "some message"
      }
    ]
  );



  function sendMessage(message){
    setMessages(
      [ ...messages,
        {
        time:0,
        author:{
            name:"some-dude"
          },
        content: message
        }
      ]
    )
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
