import './home.css';

import Lsidebar from "../../components/Lsidebar/Lsidebar";
import Rsidebar from "../../components/Rsidebar/Rsidebar";
import Feed from "../../components/feed/Feed";
import Topbar from "../../components/topbar/Topbar";


export const Home = () => {
  return (
    <>
    <Topbar/>
    <div className="homeContainer">
    <Lsidebar />
    <Feed />
    <Rsidebar />
    </div>
    </>
  )
}

