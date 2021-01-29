import React, { Component }  from 'react'
import NavBar from '../Navigation/navBar'
// import FormModal from './loginModal'
import SideBar from '../Navigation/side-bar'
import Request from '../pages/requests'
// TODO
// add login functionality for user or admin so that it will add admin buttons to the page

export default class DashBoard extends Component {
    constructor(props) {
        super(props)
        this.state = {            
            modalIsOpen: false,
            user : props.role,
            logged_In: props.loggedIn,
            userName: props.userName
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

    
    
    
    
        
    
    
    render() {
    return(
        <div >
        <div className="dashboard-container">
        <NavBar />
        <SideBar userName={this.state.userName}  />
        <Request modalIsOpen={this.state.modalIsOpen} />
      
        
        

         
        </div>
           </div>
        
    )
}
}
    




