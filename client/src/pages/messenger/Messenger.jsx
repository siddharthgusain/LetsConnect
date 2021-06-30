import './messenger.css';
import Topbar from '../../components/topbar/Topbar';
import Conversations from '../../components/conversations/Conversations';
import Message from '../../components/message/Message';
import SendIcon from '@material-ui/icons/Send';
import ChatOnline from '../../components/chatOnline/ChatOnline';

export default function Messenger() {
    return (
        <>
            <Topbar />
            <div className="messenger">
                <div className="chatMenu">
                    <div className="chatMenuWrapper">
                        <input placeholder = "Search for friends" className="chatMenuInput" />
                        <Conversations />
                        <Conversations />
                        <Conversations />
                        <Conversations />
                    </div>
                </div>
                <div className="chatBox">
                    <div className="chatBoxWrapper">
                        <div className="chatBoxTop">
                            <Message own = { true }/>
                            <Message />
                            <Message />
                            <Message />
                            <Message />
                            <Message />
                            <Message />
                            <Message />
                            <Message />
                            <Message />
                        </div>
                        <div className="chatBoxBottom">
                            <textarea  className="chatMessageInput" placeholder ="Write your message" ></textarea>
                            <button className="chatSubmitButton">
                                Send
                                <SendIcon />   
                            </button>
                        </div>
                    </div>
                </div>
                <div className="chatOnline">
                    <div className="chatOnlineWrapper">
                        <ChatOnline />
                    </div>
                </div>
            </div>
        </>
    )
}
