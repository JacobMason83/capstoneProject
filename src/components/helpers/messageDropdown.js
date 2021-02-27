import React, { useState, Fragment } from 'react';
import MessageLinks from './message-links'



const LandLordDropdown= () =>  {
   const [click, setClick] = useState(false)
   const handleClick = () => setClick(!click)
   return(
   <> 
   <ul 
   onClick={handleClick}
   className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
   >
   {MessageLinks.map((item, index) => {
       return(
           <li key={index}>
               <Link 
               className={item.cName}
               to={item.path}
               onclick={() => {
                   setClick(false)
               } }>
                   {item.title}<i class="far fa-envelope"></i>
               </Link>
           </li>
       )
   })}
   </ul>
    
  </>
   )
}
export default LandLordDropdown