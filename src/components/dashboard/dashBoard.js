import React, { useState }  from 'react'
import { Link } from 'react-router-dom'

const DashBoard = props => {
    const [user, setUser] = useState('user')
    
    const setDashBoard = user === props.user ? setUser(props.user) : setUser("user")

    if(setDashBoard === "Admin"){
        return(
            <div>
           <div className="side-bar">
               <Link to="/home" />
               <NavLink path="/portfolio">Portfolio of Homes</NavLink>
               <NavLink path="/addRemoveUsers">Add/Remove Tenants</NavLink> 
           </div>
        </div>
    )
} else {
    return (
        <div>
            <h1>Hi there from else </h1>
        </div>
    )
}
}

export default DashBoard;
