import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'



export default class NavBar extends Component {

   constructor() {
     super()
    this.state = {        
        userDashboard: true,
        adminDashBoard: false
    }
   }

   render() {
     return (
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
   )
  }
 }