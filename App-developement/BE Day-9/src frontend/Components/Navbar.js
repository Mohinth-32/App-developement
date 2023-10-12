import React, { useState } from 'react';
import './Navbar.css';
import { toggleSidebar } from '../redux/sidebarSlice';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import { useDispatch, useSelector } from 'react-redux';
import { Dropdown } from 'rsuite';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [show, setShow] = useState(false);
  const username=useSelector((state)=>state.user.user);
  const isSidebarOpen = useSelector((state) => state.sidebar.isOpen);
  const dispatch = useDispatch();
  const handleToggleSidebar = () => {
    dispatch(toggleSidebar());
  };
  return (
    <div className="nav">
      <header>
        <div className="nav-content">
          <div className='logo'>
          <img  class="logo1" alt="logo" src="https://i.pinimg.com/originals/2e/cf/73/2ecf7364cd78b7222311518159a72179.jpg"/>
          </div>
          <div class="logo-name"> 
         {isSidebarOpen ? (<h1 className='me1'>TravelExpenser</h1>):(<></>) } 
          </div>
          <div className="toggle" onClick={handleToggleSidebar}>
         {username ?(<>  <MenuIcon/></>):(<></>)}
        </div>
          <nav className={`${show ? 'mobile-nav' : 'list'}`}>
            <ul>
             {
              username? (<>            

              </>):(<Link to="/login"><h3 class="login">Login</h3></Link>)}
            </ul>
          </nav>
        </div>
        <div className='socialIcons'></div>
      </header>
      <div id="footer">
        <div className="container footer-position">
          <div className="row">
            <div className="col-md-12">
              <span>©hello</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
