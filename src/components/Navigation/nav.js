
import React, { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import {Container} from 'react-bootstrap'
import {Offcanvas} from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import LandLordDropdown from '../helpers/landLordDropdown'
// import MessageDropdown from '../helpers/messageDropdown'

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
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Fragment>
  
 <div className="navbar">

 
    {/* <nav className='dropdown bg-primary '>
   
        
      </nav> */}


    <Button className="text-color bg-black" onClick={handleShow}>
      Landlord Tenant App
    </Button>

    <Offcanvas className="sidebarBg text-dark bg-gray-400" show={show} onHide={handleClose} >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title className="sidebarBg text-color" >Landlord Tenant App</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body className="sidebarBg text-color" text-dark bg-gray-400>
      <div className='container-fluid bg-gray-400 text-dark'>
        <Link to='/dashboard' className='text-color'  onClick={closeMobileMenu}>
          LandlordTenant Home
        </Link>
          <a className='nav-item'>
            <Link to='/dashboard' className='nav-links text-color' onClick={closeMobileMenu}>
              Home
            </Link>
          </a>
          <a
            className='nav-item text-color '
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/'
              className='nav-links text-color'
              onClick={closeMobileMenu}
              id='landlord'
            >
              Landlord 
            </Link>
            {dropdown && <LandLordDropdown  
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave} />}
          </a>

         
          <a className='nav-item text-color'>
            <Link
              to='/pay-rent'
              className='nav-links text-color'
              onClick={closeMobileMenu}
            >
              Pay Rent
            </Link>
          </a>
          <a className='nav-item text-color'>
            <Link
              to='/requests'
              className='nav-links text-color'
              onClick={closeMobileMenu}
            >
              Maitanence Requests
            </Link>
          </a>
          <a
            className='nav-item text-color' 
          >
            <Link
              to='/send-messages'
              className='nav-links text-color'
              onClick={closeMobileMenu}
            >
              Messages
            </Link>
          </a>
          <a
            className='nav-item text-color'
          >
            <Link
              to='/messages'
              className='nav-links text-color'
              onClick={closeMobileMenu}
            >
              Get messages
            </Link>
          </a>
          
        
        </div>
      </Offcanvas.Body>
    </Offcanvas>
    </div>
    </Fragment>
  );
}

export default Navbar;