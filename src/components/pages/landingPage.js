import React, { useState } from 'react';

import auth from '../../auth/auth'
import DashBoard from '../dashboard/dashBoard';
import FormModal from '../dashboard/loginModal'


const LandingPage = (props) => {
   const [modalIsOpen, setModalIsOpen ] = useState(true)
   const [username, setUsername ] = useState('')
   const [role, setRole ] = useState('')
   const [loggedIn, setLoggedIn ] =useState(false)
   const formLogin = (data) => {
       console.log(data)       
    setModalIsOpen(false)
    setUsername(data.username)
    setRole(data.role)
    setLoggedIn(true)
   }
   return(
   <div> 
   <DashBoard modalIsOpen={modalIsOpen} userName={username} role={role} loggedIn={loggedIn} />
    <FormModal modalIsOpen={modalIsOpen} formLogin={formLogin}/>
  </div>
   )
}   
export default LandingPage