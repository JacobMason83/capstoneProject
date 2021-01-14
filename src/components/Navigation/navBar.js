import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'




export default class NavBar extends Component {

   constructor(props) {
     super(props)
    this.state = {        
        userDashboard: true,
        adminDashBoard: false,
        loggedIn: this.props.loggedIn

    }
   }

   render() {
     return (
         <div>
         <div className="name-container">
                 <h2>LandLord Tenant App</h2>
             <div className="name-wrapper">
             <h1>Jacobs Page</h1>
             </div>
         </div>
         <div className="nav-container">
        <div className="nav-wrapper">
            <NavLink to='/home' activeClassName="active" className="nav-link">Home</NavLink>
        </div>
        <div className="nav-wrapper">
            <NavLink to='/message' activeClassName="active" className="nav-link">Messaging</NavLink>
        </div>
        <div className="nav-wrapper">
            <NavLink to='/maitanence-requests' activeClassName="active" className="nav-link">Maitenance Requests</NavLink> 
        </div>
        <div className="nav-wrapper">
            <NavLink to='/pay-rent' activeClassName="active" className="nav-link">Pay Rent</NavLink> 
        </div>
        
        </div>
   </div>
   )
  }
 }