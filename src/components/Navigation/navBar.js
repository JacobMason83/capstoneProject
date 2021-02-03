import React, { useEffect, useState, Fragment } from 'react'
import { Link } from 'react-router-dom'

//Todo get the user data

const NavBar = props => {
  const [role, setRole] = useState('owner')
  const [username, setUsername] = useState('')

  useEffect(() => {
    setRole(props.roles)
    setUsername(props.userName)
  }, [props.userName, props.roles])

  return (
    <div className='nav-container'>
      <div className='nav-links-wrapper'>
        <h1 className='nav-header'>Landlord Tenant App </h1>
        <h3>{username}</h3>
        <Link to='/dashboard' className='nav-links'>
          Home
        </Link>
        <Link to='/pay-rent' className='nav-links'>
          Pay Rent
        </Link>
        <Link to='/requests' className='nav-links'>
          Maintenance Requests
        </Link>
        <Link to='/messages' className='nav-links'>
          Messages
        </Link>
        <Link to='/send-messages' className='nav-links'>
          Send Messages
        </Link> 
        {role === 'owner' ? (
        <Fragment>
        <Link to='/add-homes' className='nav-links'>
          Add Property
        </Link>
        <Link to='/home-showpage' className='nav-links'>
          Property List
        </Link>
        <Link to='/showRequests' className='nav-links'>
          Maintainace To Do
        </Link> 

        </Fragment>

        ):(
        <Fragment >
        </Fragment>

        )}

      
        
      
    

      
      </div>
    </div>
  )
}

export default NavBar
