import React, { Component } from 'react';
import DashBoard from '../dashboard/dashBoard';
import FormModal from '../dashboard/loginModal'


export default class LandingPage extends Component {
   constructor() {
      super()
      this.state ={
         modalIsOpen : true,
          username: '',
          role: '',
          loggedIn: false
      }
   }
   formLogin = (data) => {
      const { username, role } = data      
      this.setState({
         modalIsOpen: false,
         username: username,
         role: role,
         loggedIn: true
      })

      }
   
   render() {
      const { role, loggedIn, username} = this.state

      return(
      <div> 
      <DashBoard  username={username} role={role} loggedIn={loggedIn} />
       <FormModal modalIsOpen={this.state.modalIsOpen} formLogin={this.formLogin}/>
     </div>
      )
      
}  
} 
