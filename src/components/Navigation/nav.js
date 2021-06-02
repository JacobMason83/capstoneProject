
import React, { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';

import LandLordDropdown from '../helpers/landLordDropdown'
import MessageDropdown from '../helpers/messageDropdown'

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if ((window.innerWidth < 960 )&&( document.getElementById ==='landlord' || document.getElementById === 'messages')) {
      setDropdown(true);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <Fragment>
      <nav className='navbar'>
        <Link to='/dashboard' className='navbar-logo' onClick={closeMobileMenu}>
          LandlordTenant Home
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fa fa-times' : 'fa fa-plus-square'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/dashboard' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/'
              className='nav-links'
              onClick={closeMobileMenu}
              id='landlord'
            >
              Landlord 
            </Link>
            {dropdown && <LandLordDropdown  
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave} />}
          </li>

         
          <li className='nav-item'>
            <Link
              to='/pay-rent'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Pay Rent
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/requests'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Maitanence Requests
            </Link>
          </li>
          <li
            className='nav-item'
          >
            <Link
              to='/send-messages'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Messages
            </Link>
          </li>
          <li
            className='nav-item'
          >
            <Link
              to='/messages'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Get messages
            </Link>
          </li>
          
        </ul>
        
      </nav>
    </Fragment>
  );
}

export default Navbar;