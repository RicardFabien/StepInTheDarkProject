import { useState } from "react";
import ChatMessage from "./parts/ChatMessage";
import React from "react";

type Message = any;

interface ChatProp {
  readonly messages: Message[];
  readonly sendMessage: Function;
}

function Chat({ messages, sendMessage }: ChatProp) {
  // TODO: give proper key based on id
  var chatMessages = messages.map((msg: Message, count) => {
    return <ChatMessage key={count} message={msg} />;
  });

  const [textareaVal, setTextareaVal] = useState("");

  return (
    <div className="Chat">
      <div id="screen">{chatMessages}</div>
      <textarea
        onChange={(event) => {
          setTextareaVal(event.target.value);
        }}
      ></textarea>
      <button onClick={() => sendMessage(textareaVal)}>Post</button>
    </div>
  );
}

export default Chat;
