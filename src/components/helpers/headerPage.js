import React, { useState } from 'react';


const Header = () => {

   return(
      <div className="top-header">   
      <div className="left-side">
       <h1> Messages Page </h1>
      </div>
      <div className="right-side">
         <ul>
           <li>FaceBook</li>
           <li>Instagram</li>
           <li>Logout</li>
         </ul>
      </div>
     </div>
   )
}

export default Header