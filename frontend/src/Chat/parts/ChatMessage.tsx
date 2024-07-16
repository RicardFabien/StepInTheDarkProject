import React from "react";

type MessageObject = any

interface ChatMessageProps{
    readonly message: MessageObject
}

function ChatMessage({message}: ChatMessageProps ){
    return (
        <div className = "chat-message">
            <p>
                <span className = "chat-author">{message.author.name}:</span> {message.content}
            </p>
        </div>
       
    )
}

export default ChatMessage;
