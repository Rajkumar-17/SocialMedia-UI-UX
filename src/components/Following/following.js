import React from 'react';
import "./following.css";

export default function following({userFriend}) {
  return (
        <div className="rightbarFollowing">
        <img
        src={userFriend.profilePicture}
        alt=""
        className="rightbarFollowingImg"
        />
        <span className="rightbarFollowingName">{userFriend.username}</span>
    </div>
  )
}
