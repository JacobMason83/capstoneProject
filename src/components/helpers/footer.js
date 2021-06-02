import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import LogoImg from '../../style/images/acton.png'


const Footer = () =>  {
    const addClass = () => {
        const addUnderline = document.getElementByClassName('.foot-links')
        addUnderline.classList.add('underline')
    }
   return(
   <footer className='footer-container'>
       <div className="footer-wrapper">
       <div className="top">
           <div className="left-side">
            <Link to='/dashboard' className='foot-links'>
                Home
            </Link>
            <Link to='/pay-rent' className='foot-links'>
                Pay Rent
            </Link>
            <Link to='/send-messages' className='foot-links'>
                Send Messages
            </Link>
            <Link to='/messages' className='foot-links'>
                Get Messages 
            </Link>
            <Link to='/requests' className='foot-links'>
               Maitenance Requests
            </Link>
           </div>
           {/* <div className="right-side">
             <img src={LogoImg}/>
           </div> */}
       </div>
       <div className="bottom">
         <h3><a href="https://jdm-myportfolio.herokuapp.com"><i className="fa fa-copyright" aria-hidden="true"></i> Mason Web Designs</a></h3>
       </div>
       </div>
   </footer>
   )
}

export default Footer