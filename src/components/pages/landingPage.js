import React, { useState } from 'react';
import auth from '../../auth/auth'
import FormModal from '../dashboard/loginModal'


const LandingPage = (props) => {
   const [modalIsOpen, setModalIsOpen ] = useState(true)
   return(
   <div> 
    <FormModal modalIsOpen={modalIsOpen}/>
  </div>
   )
}   
export default LandingPage