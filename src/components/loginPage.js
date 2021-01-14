import React, { Component } from 'react';
import axios from 'axios'
import ReactModal from 'react-modal'

ReactModal.setAppElement(".app-wrapper")
export default class LoginPage extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
         user: {
             userName: "",
             password: "",
             role: "admin",
             signUp: ""
         }, 
         isOpen: true,
    }
    this.customStyles = {
        
            content: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "darkslategrey",
            top: "50%",
            left: "50%",
            right: "auto",
            bottom:"auto",
           color:'white',
            transform: "translate(-50%, -50%)",
            width: "700px",
            height: "50vh",
            boxShadow: "10px 13px 14px 5px rgba(0,0,0,1.75)"
            
            },
            overlay: {
                backgroundColor: "transparent"
            }        
    }
}

   
     handleChange = (e) => {    
     this.setState({
         [e.target.name]: e.target.value
     }) 
    }
    

    render(){
   return(
       
       <ReactModal style={this.customStyles} isOpen={this.state.isOpen}>
   <div className="loginPage" >
        <form onSubmit={this.formSubmit} className="login-form" >
        <div className="log-in-wrapper">
        <h1>LandLord Tenant App</h1>
        <h2>Login Page</h2>
        <input 
        type="text" 
        name="userName"
        onChange={this.handleChange} 
        placeholder="UserName"
        value={this.state.user.userName}        
        />       
        <input 
        type="password" 
        name="password"        
        placeholder="Password"
        value={this.state.user.password}
        onChange={this.handleChange}
        />
        <br />
        <input 
        type="checkbox" 
        name="checkbox"        
        placeholder="Signup"
        value={this.state.user.signUp}
        onChange={this.handleChange}
        />
       <br />
        <button className="btn" type="submit">Sign In</button>
        </div>
        </form>
  </div>
        </ReactModal>
   )
    }
}
