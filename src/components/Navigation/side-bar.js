import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import {
    ProSidebar,
    Menu,
    MenuItem,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
  } from "react-pro-sidebar";
  import { FaList, FaRegHeart } from "react-icons/fa";
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { FaMoneyCheck } from "react-icons/fa";
import {  BiMessageAltDetail } from "react-icons/bi";
import { ImUserPlus } from "react-icons/im";
import { RiHomeHeartLine } from "react-icons/ri";
  // bringing in styles from the library 
// TODO 
// bring in props to add custom username to the sidebar 

  const SideBar = (props) => {
          //create initial menuCollapse state using useState hook
    const [menuCollapse, setMenuCollapse] = useState(false)
    const [name, setName] = useState('Jacob') 

    //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (
    <div>
      <div id="header">
          {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
          <div>
            {name}
          </div>
            <div className="closemenu" onClick={menuIconClick}>
                {/* changing menu collapse icon on click */}
              {menuCollapse ? (
                <FiArrowRightCircle/>
              ) : (
                <FiArrowLeftCircle/>
              )}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem active={true} icon={<FiHome />}>
              <NavLink to='/home' activeClassName='active' className='nav-link'>
              Home
            </NavLink>
              </MenuItem>
              <MenuItem icon={<BiMessageAltDetail />}><NavLink
              to='/message'
              activeClassName='active'
              className='nav-link'
            > Messaging
            </NavLink></MenuItem>
              <MenuItem icon={<ImUserPlus />}><NavLink
              to='/maitenance-requests'
              activeClassName='active'
              className='nav-link'
            > Maitenance Requests
            </NavLink></MenuItem>
              <MenuItem icon={<FaMoneyCheck />}><NavLink
              to='/pay-rent'
              activeClassName='active'
              className='nav-link'
            > Pay Rent 
            </NavLink></MenuItem>
              <MenuItem icon={<RiHomeHeartLine />}><NavLink
              to='/dashboard'
              activeClassName='active'
              className='nav-link'
            > DashBoard
            </NavLink></MenuItem>
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </div>
  );
};

export default SideBar;



// dynamicLinks = (route, linkText) => {
//     return (
//       <div className='nav-wrapper'>
//         <NavLink to={route} activeClassName='active' className='nav-link-'>
//           {linkText}
//         </NavLink>
//       </div>
//     )
//   }
  

