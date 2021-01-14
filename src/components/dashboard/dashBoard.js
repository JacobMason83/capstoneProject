import React, { Component }  from 'react'
import NavBar from '../Navigation/navBar'
import LoginPage from '../loginPage'

export default class DashBoard extends Component {
    constructor(props) {
        super()
        this.state = {
            user: "",
            loggedIn: false
        }
    }

    
     handleFormLogin = () => {
        console.log("login from dashboard")
    }
    
        
        
    
    
    render() {
    return(
        <div>
        <NavBar 
        user={this.state.user === "user" ? this.state.user : this.setState({user: "admin"})}>
        <LoginPage loginIsOpen={this.state.loggedIn} handleFormLogin={this.handleFormLogin} />
        </NavBar>
            
                
           </div>
        
    )
}
}
    




