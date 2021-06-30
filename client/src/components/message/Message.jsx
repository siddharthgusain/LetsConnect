import './message.css';

export default function Message({ own }) {
    return (
        <div className= { own ? "message own" : "message" }>
            <div className="messageTop">
                <img 
                    className = "messageImg" 
                    src="https://images.unsplash.com/photo-1520466809213-7b9a56adcd45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
                    alt=""
                />
                <p className="messageText">Hello testing</p>
            </div>
            <div className="messageBottom">
                just now
            </div>
            
        </div>
    )
}
