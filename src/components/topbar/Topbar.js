import { NavLink } from 'react-router-dom';
import './Topbar.css';
import { Search, Person, Chat, Notifications } from '@mui/icons-material';

export default function Topbar() {
  return (
    <div className ="tbContainer">
      {/* Left side */}
      <div className = "tbLeft">
      <span className="tbLogo">All Together</span>
      </div>

      {/* Center Side */}
      <div className = "tbCenter">
        <div className = "tbSearchbar">
          <Search className='tbSearchIcon'/>
          <input placeholder='Search for anyone' className='tbSearchInput'></input>
        </div>
      </div>

      {/* Right side */}
      <div className = "tbRight">
        <div className='tbLinks'>
          <NavLink to="/" className="tbLinks">Homepage</NavLink>
          <span className='tbLinks'>Timeline</span>
        </div>

        <div className='tbIcons'>
          <div className='tbIconsItem'>
            <Person />
            <span className='tbIconsBadge'>59</span>
          </div>
          <div className='tbIconsItem'>
            <Chat />
            <span className='tbIconsBadge'>69</span>
          </div>
          <div className='tbIconsItem'>
            <Notifications />
            <span className='tbIconsBadge'>+9</span>
          </div>
        </div>
        <NavLink to="/profile">
        <img src='https://www.svgrepo.com/show/9649/avatar.svg' alt='PP' className='tbImg' />
        </NavLink>
      </div>
    </div>
  )
}
