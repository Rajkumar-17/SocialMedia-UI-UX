import "./profile.css";

import Lsidebar from "../../components/Lsidebar/Lsidebar";
import Rsidebar from "../../components/Rsidebar/Rsidebar";
import Feed from "../../components/feed/Feed";
import Topbar from "../../components/topbar/Topbar";


export const Profile = () => {
  return (
    <>
    <Topbar/>
    <div className="profile">
      <Lsidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
            <img className="profileCoverImg" src="https://i.pinimg.com/736x/53/77/3f/53773fa6d6c4673b87d9c668f152fcb3.jpg" alt="coverImage"/>
            <img className="profileUserImg" src="https://www.svgrepo.com/show/9649/avatar.svg" alt="profileImage"/>
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName"> Lovesh Kaguya</h4>
              <h4 className="profileInfoDesc"> Hello My Friends</h4>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rsidebar profile />
          </div>
          </div>
    </div>
    </>
  )
}