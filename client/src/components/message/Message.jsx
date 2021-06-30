import './message.css';
import { format } from "timeago.js";

export default function Message({ message , own }) {

    return (
        <div className= { own ? "message own" : "message" }>
            <div className="messageTop">
                <img 
                    className = "messageImg" 
                    src="https://images.unsplash.com/photo-1520466809213-7b9a56adcd45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
                    alt=""
                />
                <p className="messageText">{ message.text }</p>
            </div>
            <div className="messageBottom">
                { format(message.createdAt) }
            </div>
            
        </div>
    )
}
