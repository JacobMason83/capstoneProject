import React, { useState }  from 'react'
import NavBar from '../Navigation/navBar'
import LoginPage from '../loginPage'

const DashBoard = props => {
    const [user, setUser] = useState('Admin')
    const [loggedIn, setLoggedIn] = useState(false)

    
        
        
    
    // const setDashBoard = user === "Admin"  ? user : setUser("user")
    
    return(
        <div>
        <NavBar 
        user={user === "user" ? user : setUser("Admin")}>
        <LoginPage loginIsOpen={loggedIn} />
        </NavBar>
            
                
           </div>
        
    )
}
    



export default DashBoard;
