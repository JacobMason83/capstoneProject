import React, { useState }  from 'react'
import { NavLink,  Link } from 'react-router-dom'

const DashBoard = props => {
    const [user, setUser] = useState('Admin')
    
    // const setDashBoard = user === "Admin"  ? user : setUser("user")

    if(user === "Admin"){
        return(
            <div className="hero-side-container">
           <div className="side-bar">
               <Link to="/home" />
               <Link to="/portfolio" >Portfolio of Homes</Link>
               <Link to="/addRemoveUsers" >Add/Remove Tenants</Link> 
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
