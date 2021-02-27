import React, { useState, Fragment } from 'react';
import LandLordLinks from './landlordLinks'



const LandLordDropdown= () =>  {
   const [click, setClick] = useState(false)
   const handleClick = () => setClick(!click)
   return(
   <> 
   <ul 
   onClick={handleClick}
   className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
   >
   {LandLordLinks.map((item, index) => {
       return(
           <li key={index}>
               <Link 
               className={item.cName}
               to={item.path}
               onclick={() => {
                   setClick(false)
               } }>
                   {item.title}
               </Link>
           </li>
       )
   })}
   </ul>
    
  </>
   )
}
export default LandLordDropdown