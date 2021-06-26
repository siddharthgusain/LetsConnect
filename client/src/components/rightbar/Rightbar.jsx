import './rightbar.css';
import { Users } from '../../dummyData';
import Online from '../online/Online';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { Add } from '@material-ui/icons';

export default function Rightbar({ user }) {

    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const [friends , setfriends ] = useState([]);

    const { user : currentUser } = useContext(AuthContext);

    useEffect(() =>{

        const getFriends = async ()=>{
            try{
                const friendList = await axios.get("/users/friends/" + user._id);
                setfriends(friendList.data);

            }catch(err){
                console.log(err);
            }
        };

        getFriends();

    },[user]);

    const HomeRightbar = () => {
        return (
            <>
                <div className="birthdayContainer">
                    <img className="birthdayImg" src="/assets/gift.png" alt="" />
                    <span className="birthdayText">
                        <b>Robert</b> and <b>3 other friends</b> have a birthday today
                        </span>
                </div>
               
                <img className="rightbarAd" src="/assets/ad.png" alt="" />
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">
                   {
                       Users.map(u => (
                           <Online key = {u.id} user = {u} />
                       ))
                   }
                </ul>
            </>
        );
    };

    const ProfileRightbar = () =>{
        return (
            <>
                { user.username !== currentUser.username && (
                    <button className="rightbarFollowButton" >
                        Follow <Add />
                    </button>
                )}
                <h4 className="rightbarTitle">User Information</h4>
                <div className="rightbarInfo">
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">City:</span>
                        <span className="rightbarInfoValue">{ user.city }</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">From:</span>
                        <span className="rightbarInfoValue">{ user.from }</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">Relationship:</span>
                        <span className="rightbarInfoValue">
                            {
                         user.relationship === 1 
                         ? "Single" 
                         : user.relationship === 2
                         ? "Married"
                         : "Complicated" }
                         </span>
                    </div>
                </div>
                <h4 className="rightbarTitle">User Friends</h4>
                <div className="rightbarFollowings">
                    {
                        friends.map(friend => (

                        <Link style = {{ textDecoration : "none" , textDecorationColor :"white" }} to = {"/profile/" + friend.username }>

                            <div className="rightbarFollowing">

                                <img src = {

                                    friend.profilePicture 
                                    ? PF + friend.profilePicture
                                    : PF + "person/noAvatar.png"
                                            
                                        } 
                                    alt="" 
                                    className="rightbarFollowingImg" 
                                />
                                <span className="rightbarFollowingName">{ friend.username }</span>
                            </div>
                        </Link>
                        ))
                   
                     }           
                </div>
            </>
            )
    }

    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                { user ? <ProfileRightbar /> : <HomeRightbar /> }
            </div>
        </div>
    )
}
