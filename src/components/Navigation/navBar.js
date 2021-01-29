import React, { useState } from 'react'
import { Link } from 'react-router-dom'



const NavBar = () => {
  const [role, setRole] = useState('owner')
  const dynamicLinks = (route, linkText) => {
    return (
      <div className="nav-wrapper">
      <Link to={route} className='owner-links'>
        {linkText}
      </Link>
      </div>
    )
  }
  return (
    <div className="nav-container">
      <h1>Landlord Tenant App </h1>
      {role === 'owner' ? (
              dynamicLinks('/addRemoveTenants', 'Add Remove Tenants')
            ):null}
            {role === 'owner' ? (
              dynamicLinks('/portfolio', 'Homes')
            ):null}
    </div>
  )
}

export default NavBar
