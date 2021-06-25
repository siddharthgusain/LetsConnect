import './share.css';
import { PermMedia ,Label , Room , EmojiEmotions } from "@material-ui/icons";
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

export default function Share() {

    const { user } = useContext(AuthContext);
    
    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img className="shareProfileImg" src="/assets/person/1.jpeg"alt="" />
                    <input 
                        placeholder="Share What's on your mind siddharth"
                        className ="shareInput"
                    />
                </div>
                <hr className="shareHr" />
                <div className="shareButtom">
                    <div className="shareOptions" >
                        <div className="shareOption">
                            <PermMedia htmlColor = "tomato" className="shareIcon"/>
                            <span className="shareOptionText">Photo/Video</span>
                        </div>
                        <div className="shareOption">
                             <Label  htmlColor = "blue" className="shareIcon"/>
                             <span className="shareOptionText">Tag</span>
                         </div>
                        <div className="shareOption">
                              <Room htmlColor = "green" className="shareIcon"/>
                              <span className="shareOptionText">Location</span>
                        </div>
                        <div className="shareOption">
                            <EmojiEmotions  htmlColor = "yellow"className="shareIcon"/>
                            <span className="shareOptionText">Feelings</span>
                        </div>  
                    </div>
                    <button className="shareButton">Share</button>
                </div>
            </div>
        </div>
    )
}
