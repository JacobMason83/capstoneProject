import React, { Component } from 'react';
import ReactModal from 'react-modal'
ReactModal.setAppElement(".app-wrapper")


export default class FormModal extends Component {

   constructor(props) {
     super(props)
     this.state = {
         userName: "", 
         password: ""
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
   handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleFormLogin(this.state)
    this.setState({
        userName: "", 
        password: ""
    })
    
}
handleChange = (e) => {    
    this.setState({
        [e.target.name]: e.target.value
    }) 
   }

  


   render() {
     return (
        <ReactModal style={this.customStyles} isOpen={this.props.modalIsOpen}>
        <form onSubmit={this.handleSubmit} className="login-form" >
    
        <h1>LandLord Tenant App</h1>
        <h2>Login Page</h2>
        <input 
        type="text" 
        name="userName"
        onChange={this.handleChange} 
        placeholder="User Name"
        value={this.state.userName}        
        />       
        <input 
        type="password" 
        name="password"        
        placeholder="Password"
        value={this.state.password}
        onChange={this.handleChange}
        />
        <br />
        <button className="btn" type="submit">Sign In</button> 
        </form>
        </ReactModal>
     )
  }
 }