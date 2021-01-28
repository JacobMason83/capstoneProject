import React, { Component } from 'react';
import ReactModal from 'react-modal'
ReactModal.setAppElement(".app-wrapper")


export default class FormModal extends Component {

   constructor(props) {
     super(props)
     this.state = {
         userName: "", 
         password: "",
         modalIsOpen: true
     }
     this.customStyles = {
        
        content: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#1E88E5",
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
        <div className="form-container">
        <div className="title-wrapper">
        <h1>LandLord Tenant App</h1>
        <h2>Login Here</h2>
        </div>
        
        <div className="login-content">
        <input 
        type="text" 
        name="userName"
        onChange={this.handleChange} 
        placeholder="User Name"
        value={this.state.userName}        
        />    
        <br />   
        <input 
        type="password" 
        name="password"        
        placeholder="Password"
        value={this.state.password}
        onChange={this.handleChange}
        />
        <br />
        <button className="btn" type="submit">Sign In</button> 
        </div>
        </div>
        </form>
        </ReactModal>
     )
  }
 }