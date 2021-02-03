import React, { Component } from 'react';
import axios from 'axios'
import ShowAllRequests from '../user/maprequests'



export default class RequestShowPage extends Component {

   constructor() {
     super()
     this.state = {
        needToBeFixed: []
     }
   }
   getRequestItem = () => {
       axios
       .get('http://localhost:4000/all-requests', {withCredentials: true})
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
         
        <ShowAllRequests needToBeFixed={this.state.needToBeFixed} />
  
   )
  }
 }