import './messenger.css';
import Topbar from '../../components/topbar/Topbar';
import Conversations from '../../components/conversations/Conversations';
import Message from '../../components/message/Message';
import SendIcon from '@material-ui/icons/Send';
import ChatOnline from '../../components/chatOnline/ChatOnline';
import { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';

export default function Messenger() {

    const { user } = useContext(AuthContext);

    const [conversations , setConversations ] = useState([]);
    const [currentChat , setCurrentChat ] = useState(null);
    const [messages , setMessages ] = useState([]);

    useEffect(() =>{
        
        const getConversations = async () =>{

            try{

                const res = await axios.get("/conversations/" + user._id);
                setConversations(res.data);

            }catch(err){
                console.log(err);
            }
            
        };

        getConversations();

    },[user._id]);

    console.log(currentChat);

    return (
        <>
            <Topbar />
            <div className="messenger">
                <div className="chatMenu">
                    <div className="chatMenuWrapper">
                        <input placeholder = "Search for friends" className="chatMenuInput" />
                        {
                            
                            conversations.map((c) =>{
                                 return ( 
                                 <div onClick={ () => setCurrentChat(c) } > 
                                    <Conversations  key = { c._id } conversation = { c } currentUser = { user } />         
                                 </div>
                                 )
                            })
                        }
                    </div>
                </div>
                <div className="chatBox">
                    <div className="chatBoxWrapper">
                        {
                            currentChat 
                            ? (
                            <>
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
                            </> )
                            : (<span className="noConversationText"> Open a conversation to start a chat.</span>)

                    }
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
