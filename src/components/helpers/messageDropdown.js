import React, { useState, Fragment } from 'react';
import { Link } from 'react-router-dom'




const MessageDropdown = (props) =>  {
   const [click, setClick] = useState(false)
   const handleClick = () => setClick(!click)
   const MessageLinks = [
    {
        title: 'Send',
        path: '/sendMessages',
        cName: 'dropdown-link'
},
    
{
        title: 'Receive',
        path: '/messaging',
        cName: 'dropdown-link'
},

]
   return(
   <Fragment> 
   <ul 
   onClick={handleClick}
   className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
   >
   {MessageLinks.map((item, index) => {
    return (
            <li key={index}>
              <Link
                className={item.cName}
                to={item.path}
                onClick={() => setClick(false)}
                onMouseEnter={props.onMouseEnter}
                onMouseLeave={props.onMouseLeave}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
   </ul>
    
  </Fragment>
   )
}
export default MessageDropdown 