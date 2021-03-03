import React, { useState, Fragment } from 'react';
import { Link } from 'react-router-dom'



const LandLordDropdown= (props) =>  {
   const [click, setClick] = useState(false)
   const handleClick = () => setClick(!click)
   const LandLordLinks = [
    {
        title: 'Add Property',
        path: '/add-homes',
        cName: 'dropdown-link'
},
    {
        title: 'Property List',
        path: '/home-showpage',
        cName: 'dropdown-link'
},
    {
        title: 'Maintainace To Do',
        path: '/showRequests',
        cName: 'dropdown-link'
},
]
   return(
   <Fragment> 
   <ul 
   onClick={handleClick}
   className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
   >
   {LandLordLinks.map((item, index) => {
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
export default LandLordDropdown