import React, { useEffect, useState, Fragment } from 'react'
import { Link } from 'react-router-dom'
import logoImg from '../../style/images/acton.png'

//Todo get the user data

const NavBar = props => {
  const [role, setRole] = useState('owner')
  const [username, setUsername] = useState('')
  
  useEffect(() => {
    setRole(props.role)
    setUsername(props.username)
  }, [props.username, props.role])
  
  return (
    <nav className='bg-black h-32 '>
    <div className='max-w-7xl mx-auto flex flex-row mx-4 justify-between items-center flex-grow'>
      
       <div className="mr-4 flex items-center mt-4 flex-row">
        <img className='w-16' src={logoImg} alt=""/> 
        <h3>{username}</h3>
       </div>

       

      
        
        <div className="pr-8 mt-8 md-hidden flex flex-row">
        <Link to='/dashboard' className='p-4'>
          Home
        </Link>
        <Link to='/pay-rent' className='p-4'>
          Pay Rent
        </Link>
        <Link to='/requests' className='p-4'>
          Maintenance Requests
        </Link>
        <Link to='/messages' className='p-4'>
          Messages
        </Link>
        <Link to='/send-messages' className='p-4'>
          Send Messages
        </Link> 
        </div>
        </div>
      
    

    </nav>
  )
}

export default NavBar
