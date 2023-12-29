import './Lsidebar.css';
import {Chat, Event, RssFeed, PlayCircleFilled, Group, Bookmarks, HelpOutline, WorkOutline, School} from "@mui/icons-material";

export default function Lsidebar() {
  return (
    <div className= "lsidebar">
        <div className= "lsWapper">
            <ul className="lsList">
                <li className= "lsListItem">
                    <RssFeed className='lsIcon' />
                    <span className='lsListItemText'>Feed</span>
                </li>
                <li className= "lsListItem">
                    <Chat className='lsIcon' />
                    <span className='lsListItemText'>Chats</span>
                </li>
                <li className= "lsListItem">
                    <PlayCircleFilled className='lsIcon' />
                    <span className='lsListItemText'>Videos</span>
                </li>
                <li className= "lsListItem">
                    <Group className='lsIcon' />
                    <span className='lsListItemText'>Groups</span>
                </li>
                <li className= "lsListItem">
                    <Bookmarks className='lsIcon' />
                    <span className='lsListItemText'>Bookmarks</span>
                </li>
                <li className= "lsListItem">
                    <HelpOutline className='lsIcon' />
                    <span className='lsListItemText'>Questions</span>
                </li>
                <li className= "lsListItem">
                    <WorkOutline className='lsIcon' />
                    <span className='lsListItemText'>Jobs</span>
                </li>
                <li className= "lsListItem">
                    <Event className='lsIcon' />
                    <span className='lsListItemText'>Events</span>
                </li>
                <li className= "lsListItem">
                    <School className='lsIcon' />
                    <span className='lsListItemText'>Courses</span>
                </li>  
            </ul>

            <button className='lsButton'>Show More</button>
            <hr className='lsHr'/>
            <ul className='lsFriendList'>
                <li className='lsFriend'>
                    <img src="https://www.svgrepo.com/show/58391/avatar.svg" alt="F2" className='lsFriendImg' />
                    <span className='lsFriendName'>Abhishek</span>
                </li>
                <li className='lsFriend'>
                    <img src="https://www.svgrepo.com/show/170303/avatar.svg" alt="F2" className='lsFriendImg' />
                    <span className='lsFriendName'>Lovesh</span>
                </li>
                <li className='lsFriend'>
                    <img src="https://www.svgrepo.com/show/8137/avatar.svg" alt="F2" className='lsFriendImg' />
                    <span className='lsFriendName'>Prable</span>
                </li>
            </ul>
        </div>
    </div>
  )
}
