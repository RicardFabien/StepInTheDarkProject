import "./style/App.css";
import "./style/Chat.css";
import "./style/Game.css";
import Game from "./Game/Game";
import Chat from "./Chat/Chat";
import { useCallback, useEffect, useState } from "react";
import CommunicationHandler from "./Chat/CommunicationHandler";
import React from "react";

type Message = any;

function App() {
  /**
   * Indicates whether or not the webscoket is connected
   * Handled by a communication object, which may change it depending on it's status
   */
  const [isConnected, setIsConnected] = useState(false);

  /**
   * List of all messaged received by the user
   * Also contains the user's own messages
   *
   * TODO: Updated on connect with messages the client had before the connection
   */
  const [messages, setMessages] = useState([] as Message[]);

  const handleConnectionChange = useCallback((newIsConnected: boolean) => {
    setIsConnected(newIsConnected);
  }, []);

  // Method is passed to communication object
  const handleNewMessageReceived = useCallback((message: Message) => {
    console.log(message);

    if (message.type === "connect") {
      console.log("connect message");
      setMessages(message.data);
    } else {
      setMessages((prevMessages) => [...prevMessages, message]);
    }
  }, []);

  const [messageHandler] = useState(
    () =>
      new CommunicationHandler(handleConnectionChange, handleNewMessageReceived)
  );

  useEffect(() => {
    messageHandler.connect();
    return () => {
      messageHandler.disconnect();
    };
  }, [messageHandler]);

  return (
    <div className="App">
      <header>Stuff</header>

      <div className="app-body">
        <Game />
        <Chat messages={messages} sendMessage={messageHandler.sendMessage} />
      </div>
    </div>
  );
}

export default App;
