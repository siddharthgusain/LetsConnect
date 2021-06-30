import './messenger.css';
import Topbar from '../../components/topbar/Topbar';
import Conversations from '../../components/conversations/Conversations';

export default function Messenger() {
    return (
        <>
            <Topbar />
            <div className="messenger">
                <div className="chatMenu">
                    <div className="chatMenuWrapper">
                        <input placeholder = "Search for friends" className="chatMenuInput" />
                        <Conversations />
                    </div>
                </div>
                <div className="chatBox">
                    <div className="chatBoxWrapper">
                        box
                    </div>
                </div>
                <div className="chatOnline">
                    <div className="chatOnlineWrapper">
                        Online
                    </div>
                </div>
            </div>
        </>
    )
}
