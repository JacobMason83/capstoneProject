import React, { Component } from 'react';
import axios from 'axios'


 class Auth extends Component {

   constructor() {
     super()
     this.authenticated = false
   }
   login = (cb) => {
       this.authenticated = true
       cb()

   }
   logout = (cb) => {

   }
   isAuthenticated = () => {
       return this.authenticated
   }

   render() {
     return (
         <div>

   </div>
   )
  }
 }
 export default new Auth()