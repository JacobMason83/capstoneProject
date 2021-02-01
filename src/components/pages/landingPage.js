import React, { useState } from 'react';
import DashBoard from '../dashboard/dashBoard';
import FormModal from '../dashboard/loginModal'


const LandingPage = (props) => {
   const [modalIsOpen, setModalIsOpen ] = useState(true)
   const [username, setUsername ] = useState('')
   const [role, setRole ] = useState('')
   const [loggedIn, setLoggedIn ] =useState(false)
   const formLogin = (data) => {
      const { username, role } = data      
    setModalIsOpen(false)
    setUsername(username)
    setRole(role)
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