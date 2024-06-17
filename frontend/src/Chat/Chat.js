import { useState } from "react";
import "./Chat.css"
import ChatMessage from "./parts/ChatMessage";

function Chat({messages, sendMessage}){

    console.log(messages[0].content)

    var chatMessages = messages.map((msg,count) =>{
        return (<ChatMessage key={count} message={msg}/> )
    }
    );
    console.log(chatMessages)

    const [textareaVal,setTextareaVal] = useState("")

    return (
        <div className="Chat">
            <div id="screen">
                {chatMessages}
            </div>
            <textarea onChange={(event)=>{
                      setTextareaVal(event.target.value);
                   }}></textarea>
            <button onClick ={() => sendMessage(textareaVal)}>Post</button>
        </div>
    )
}

export default Chat;
