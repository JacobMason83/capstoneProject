import React, { Component } from 'react';
import axios from 'axios'
import ShowAllRequests from '../landlord/maprequests'



export default class RequestShowPage extends Component {

   constructor() {
     super()
     this.state = {
        needToBeFixed: []
     }
   }
   getRequestItem = () => {
       axios
       .get('https://jdm-express-jwt-api.herokuapp.com/all-requests',
        {withCredentials: true})
       .then(res => 
            this.setState({
           needToBeFixed: res.data
       }))
       .catch(err => console.log('this.getRequestItem error', err))
   }
   
   componentDidMount = () => {
   this.getRequestItem()
   }

   render() {
      
     return (
         <div className="show-container">
         <div className="show-wrapper">
         <table>
         <thead>
           <tr>
             <td>Name</td>
             <td>address</td>
             <td>Description</td>
           </tr>
         </thead>
         <tbody>
        <ShowAllRequests needToBeFixed={this.state.needToBeFixed} />
         </tbody>
         </table>
         </div>
         </div>
  
   )
  }
 }