import React, {useEffect, useState} from 'react'


const SideBarFullScreen = (props) => {
    const [open, setOpen ] = useState(true)

    
    return (
       <div>        
           {open ? (
           <div className="menu">
               <span className="close-btn"><i className="fas fa-times"></i></span>
               <ul>
                   <li><a href="#">Home</a></li>
                   <li><a href="#">Pay Rent</a></li>
                   <li><a href="#">Requests</a></li>
                   <li><a href="#">Messages</a></li>
                   <li><a href="#">Send Messages</a></li>
               </ul>
           </div>

           ): (
               null
           )}
       </div>
    )
}
export default SideBarFullScreen