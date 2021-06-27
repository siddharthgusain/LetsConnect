import './sidebar.css';
import { 
    RssFeed,
    Chat , 
    Group
    // PlayCircleFilledOutlined , 
    //   Bookmark , HelpOutline,
    // WorkOutline , Event , School
} from '@material-ui/icons';

import { Users } from '../../dummyData';

import Friends from '../Friends/Friends';

export default function Sidebar(){
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">

                    <li className="sidebarListItem">
                        <RssFeed htmlColor = "orange" className="sidebarIcon"/>
                        <span className="sidebarListItemText">Feed</span>
                    </li>

                    <li className="sidebarListItem">
                        <Chat htmlColor = "green" className="sidebarIcon" />
                        <span className="sidebarListItemText">Chats</span>
                    </li>

                    <li className="sidebarListItem">
                        <Group htmlColor = "pink" className="sidebarIcon" />
                        <span className="sidebarListItemText">Groups</span>
                    </li>

                    {/* <li className="sidebarListItem">
                        <PlayCircleFilledOutlined htmlColor="blue" className="sidebarIcon" />
                        <span className="sidebarListItemText">Videos</span>
                    </li> */}

            
                    {/* <li className="sidebarListItem">
                        <Bookmark htmlColor="yellow" className="sidebarIcon" />
                        <span className="sidebarListItemText">Bookmarks</span>
                    </li>
                    <li className="sidebarListItem">
                        <HelpOutline htmlColor="#BEFF33" className="sidebarIcon" />
                        <span className="sidebarListItemText">Questions</span>
                    </li>

                    <li className="sidebarListItem">
                        <WorkOutline htmlColor="#33FCFF" className="sidebarIcon" />
                        <span className="sidebarListItemText">Jobs</span>
                    </li>

                    <li className="sidebarListItem">
                        <Event htmlColor="#5533FF" className="sidebarIcon" />
                        <span className="sidebarListItemText">Events</span>
                    </li>

                    <li className="sidebarListItem">
                        <School className="sidebarIcon" />
                        <span className="sidebarListItemText">Courses</span>
                    </li>
                    <button className="sidebarButton">Show more</button> */}
                    <hr className="sidebarHr" />
                    <ul className="sidebarFriendList">
                       {
                           Users.map( u => (
                               <Friends key = {u.id} user = {u} />
                           ))
                       }
                       
                    </ul>
                </ul>

            </div>
        </div>
    )
}  