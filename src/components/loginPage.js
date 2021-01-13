import React, { Component } from 'react';
import axios from 'axios'

export default class LoginPage extends Component {
    constructor() {
        super()
        
        this.state = {
            userName: "",
            password:  "" 
        }
    }

   
     handleChange = (e) => {    
     this.setState({
         [e.target.name]: e.target.value
     }) 
    }
    clearHandleChange = () => {
        this.setState({
            userName: "",
            password: ""
        })
    }
    componentWillUnmount() {
        this.clearHandleChange
    }
     formSubmit = () => {        
    }

    render(){
   return(
       
   <div className="loginPage" >
        <form onSubmit={this.formSubmit} className="login-form" >
        <div className="log-in-wrapper">
        <h1>Sign In </h1>
   <label htmlFor="text"> UserName</label>
        <input 
        type="text" 
        name="userName"
        onChange={this.handleChange} 
        placeholder="UserName"
        value={this.state.userName}        
        />
        <hr />
        <label htmlFor="password"> 
        Password</label>
        <input 
        type="password" 
        name="password"        
        placeholder="Password"
        value={this.state.password}
        onChange={this.handleChange}
        />
       
        <button className="btn" type="submit">Sign In</button>
        </div>
        </form>
   
  </div>
   )
    }
}