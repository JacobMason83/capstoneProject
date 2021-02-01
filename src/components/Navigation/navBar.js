import React, { useState } from 'react'
import { Link } from 'react-router-dom'

//Todo get the user data 

const NavBar = () => {
  const [role, setRole] = useState('owner')
  const dynamicLinks = (route, linkText) => {
    return (
      <Link to={route} className='nav-links'>
        {linkText}
      </Link>
      
    )
  }
  return (
    <div className="nav-container">     
    <div className="nav-links-wrapper">          
      <h1 className='nav-header'>Landlord Tenant App </h1>
        <Link to='/dashboard' className='nav-links'>Home</Link>
        <Link to='/pay-rent' className='nav-links'>Pay Rent</Link>
        <Link to='/requests' className='nav-links'>Maintenance Requests</Link>
        <Link to='/messages' className='nav-links'>Messages</Link>
        {role === 'owner' ? (
              dynamicLinks('/add-homes', 'Add Homes and Tenants')
            ):null}
            {role === 'owner' ? (
              dynamicLinks('/home-showpage', 'Property List')
            ):null}
            
            {role === 'owner' ? (
              dynamicLinks('/showRequests', 'Maintainace To Do')
            ):null}
      </div>

    </div>
   
  )
}

export default NavBar
