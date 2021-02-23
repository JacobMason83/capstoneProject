import React, { useEffect, useState } from 'react';


const Header = (props) => {
   const [page, setPage ] = useState('')
   useEffect(() => {
      setPage(props.page)
   }, [props.page])
   return(
      <div className="top-header">   
      <div className="left-side">
       <h1> {page.toUpperCase()} </h1>
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