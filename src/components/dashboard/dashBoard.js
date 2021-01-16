import React, { Component }  from 'react'
import NavBar from '../Navigation/navBar'
// import FormModal from './loginModal'
import SideBar from '../Navigation/side-bar'
import MaitanenceRequest from '../pages/maitanenceRequests'
// TODO
// add login functionality for user or admin so that it will add admin buttons to the page

export default class DashBoard extends Component {
    constructor(props) {
        super(props)
        this.state = {            
            modalIsOpen: false,
            user : "user"
          }
        this.divStyles= {           
                display: 'flex',
                justifyContent: 'center',
                backgroundColor: 'midnightblue',
                alignItems: 'center',
                width: '100%',
                height: '100px'        
    }
}

    
     handleFormLogin = () => {
         const { userName, password } = this.props
        if(userName === 'jacob' && password === "1234") {
            this.setState({
                user: "admin",
                modalIsOpen:false
                
            })
        } else {
            this.setState({
                user: "user",
                modalIsOpen: false
                
            })
        }
    }
    
    
        
    
    
    render() {
    return(
        <div >
        
        <NavBar />
        <SideBar  />
        <MaitanenceRequest />
        
            
                
           </div>
        
    )
}
}
    




