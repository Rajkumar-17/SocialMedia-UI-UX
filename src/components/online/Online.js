import './online.css'

export default function Online({user}) {
  return (
        <li className="rsidebarFriend">
            <div className="rsidebarFriendPPConatiner">
              <img  className="rsidebarFriendImage" src={user.profilePicture} alt="FrndPP"/>
              <span className="rsidebarOnline"></span>
            </div>
            <span className="rsidebarUsername">{user.username}</span>
          </li>
  )
}
