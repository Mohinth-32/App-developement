import React, { useState } from 'react';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import './Sidebar.css';
import { Link, useNavigate } from 'react-router-dom';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';

import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import PaidIcon from '@mui/icons-material/Paid';
import ReceiptIcon from '@mui/icons-material/Receipt';
import LogoutIcon from '@mui/icons-material/Logout';

import { useDispatch, useSelector } from 'react-redux';
import { selectSidebarState } from '../redux/sidebarSlice';
import CloseIcon from '@mui/icons-material/Close';
import { logout } from '../redux/userSlice';
function SideBar() {
  const username=useSelector((state)=>state.user.user);
  const nav=useNavigate();
  const [activeMenuItem, setActiveMenuItem] = useState('Dashboard');
  const handleMenuItemClick = (menuItemId) => {
    setActiveMenuItem(menuItemId);
  };
  const dispatch=useDispatch();
  const handleLogout=()=>{
    if(window.confirm("Are You sure to logout?")){
    dispatch(logout());
    nav("/")
  }
}
  const isSidebarOpen = useSelector(selectSidebarState);
  return (
    <>
    {username? (<>
    <div className={`sidebar-container ${isSidebarOpen ? 'open' : 'menu2'}`}>
      <Sidebar>
      {isSidebarOpen ? (
          <Menu className="menu">
          <>
              <MenuItem  style={{ backgroundColor: activeMenuItem === 'Dashboard' ? 'white' : 'transparent',borderRadius:50}}  component={<Link to="/admin-dashboard" />} icon={<SpaceDashboardIcon />} onClick={() => handleMenuItemClick('Dashboard')}>Dashboard</MenuItem>
              <MenuItem  style={{ backgroundColor: activeMenuItem === 'Courses' ? 'white' : 'transparent',borderRadius:50}} component={<Link to="/trips" />} icon={<AirplanemodeActiveIcon />} onClick={() => handleMenuItemClick('Courses')}>Trips</MenuItem>
              <MenuItem  style={{ backgroundColor: activeMenuItem === 'ins' ? 'white' : 'transparent',borderRadius:50}} component={<Link to="/expense" />} icon={<PaidIcon />} onClick={() => handleMenuItemClick('ins')}>Expenses</MenuItem>
              <MenuItem  style={{ backgroundColor: activeMenuItem === 'Students' ? 'white' : 'transparent',borderRadius:50}} component={<Link to="/receipts" />} icon={<ReceiptIcon />} onClick={() => handleMenuItemClick('Students')}>Receipts</MenuItem>
              
              <MenuItem onClick={handleLogout} icon={<LogoutIcon />} className="menu-item-l">Logout</MenuItem>
              
            </></Menu>
          ) : (
              <Menu className="menu2">
              <>
              
              <MenuItem  style={{ color: activeMenuItem === 'Dashboard' ? 'black' : 'black',borderRadius:50}}  component={<Link to="/admin-dashboard" />} icon={<SpaceDashboardIcon />} onClick={() => handleMenuItemClick('Dashboard')}></MenuItem>
              <MenuItem  style={{ color: activeMenuItem === 'Courses' ? 'black' : 'black',borderRadius:50}} component={<Link to="/trips" />} icon={<AirplanemodeActiveIcon />} onClick={() => handleMenuItemClick('Courses')}></MenuItem>
              <MenuItem  style={{ color: activeMenuItem === 'ins' ? 'black' : 'black',borderRadius:50}} component={<Link to="/expense" />} icon={<PaidIcon />} onClick={() => handleMenuItemClick('ins')}></MenuItem>
              <MenuItem  style={{ color: activeMenuItem === 'Students' ? 'black' : 'black',borderRadius:50}} component={<Link to="/receipts" />} icon={<ReceiptIcon />} onClick={() => handleMenuItemClick('Students')}></MenuItem>
              
              <MenuItem onClick={handleLogout} icon={<LogoutIcon />} className="menu-item-l">Logout</MenuItem>
           
              </>
              </Menu>
          )}
      </Sidebar>
      </div>
    </>):(<></>)}
    </>
  );
}

export default SideBar;
