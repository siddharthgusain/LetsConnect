import './chatOnline.css';

export default function ChatOnline() {
    return (
        <div className="chatOnline">
            <div className="chatOnlineFriend">
                <div className="chatOnlineImgContainer">
                    <img 
                        className="chatOnlineImg"
                        src="https://images.unsplash.com/photo-1520466809213-7b9a56adcd45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60" 
                        alt="" />
                    <div className="chatOnlineBadge" ></div>
                </div>
                <span className="chatOnlineUsername">Siddharth</span>
            </div>
        </div>
    )
}
