import "./Chat.css"
import ChatMessage from "./parts/ChatMessage";

function Chat({messages, sendMessage}){

    console.log(messages[0].content)

    var chatMessages = messages.map((msg,count) =>{
        return (

                <ChatMessage message={msg}/>

            )
    }
    );
    console.log(chatMessages)

    return (
        <div className="Chat">
            <div id="screen">
                {chatMessages}
            </div>
            <textarea></textarea>
            <button onClick ={sendMessage}>Post</button>
        </div>
    )
}

export default Chat;
