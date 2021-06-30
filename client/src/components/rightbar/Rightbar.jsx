import './rightbar.css';
import { Users } from '../../dummyData';
import Online from '../online/Online';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { Add , Remove } from '@material-ui/icons';
import { Follow , Unfollow } from '../../context/AuthActions';

export default function Rightbar({ user }) {

    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    const [friends , setfriends ] = useState([]);

    const history = useHistory();

    const { user : currentUser , dispatch } = useContext(AuthContext);

    const [ followed, setFollowed ] = useState(false);

    useEffect(() =>{

            setFollowed(currentUser.followings.includes(user?._id));
        
    },[currentUser.followings ,user]);

    useEffect(() =>{

        const getFriends = async ()=>{

            try{

             const friendList = await axios.get("/users/friends/" + user?._id);
             setfriends(friendList.data);

            }catch(err){
                console.log(err);
            }
        };

        if(user !== undefined)
        {
            getFriends();
        }
    },[user]);

    const handleFollowClick = async () =>{


        try {

            if (followed) {

              await axios.put("/users/" + user._id + "/unfollow", {
                userId: currentUser._id,
              });

              dispatch(Unfollow(user._id));
            } 
            else {

              await axios.put("/users/" + user._id + "/follow" , {
                userId: currentUser._id,
              });

              dispatch(Follow(user._id));
            }
            setFollowed(!followed);

          } 
          catch (err) {
              console.log(err);
          }

    };

    const handleLogoutClick  = () =>{

        localStorage.removeItem("user");
        history.push("/login");
        window.location.reload();
        
    };

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
                       Users.map( (u) => (
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

                    <button className="rightbarFollowButton" onClick = { handleFollowClick }>
                        
                       { followed ? "Unfollow" : "Follow"}
                       { followed ? <Remove /> : <Add /> }
                       
                    </button>
                   
                )}
                {
                    user.username === currentUser.username && (

                    <button className = "rightbarLogoutButton" onClick = { handleLogoutClick }  >
                        Logout
                    </button>

                    )
                }

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
                        friends.map((friend) => (
                        <div key = { friend._id }>

                            <Link 
                                style = {{ textDecoration : "none" }}
                                to = {"/profile/" + friend.username }
                            >

                                <div  className="rightbarFollowing">

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
                        </div>
                        ))
                   
                     }           
                </div>
            </>
            );
    };

    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                { user ? <ProfileRightbar /> : <HomeRightbar /> }
            </div>
        </div>
    )
}
