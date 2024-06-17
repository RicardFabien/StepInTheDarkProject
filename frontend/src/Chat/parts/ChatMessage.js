function ChatMessage({message}){
    return (
        <div className = "chat-message">
            <p>
                <span className = "chat-author">{message.author.name}:</span> {message.content}
            </p>
        </div>
       
    )
}

export default ChatMessage;
