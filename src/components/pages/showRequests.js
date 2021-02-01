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
       .then(res => this.setState({
           needToBeFixed: res.data
       }))
       .catch(err => console.log('this.getRequestItem error', err))
   }
//    showNeedtoBeFixed = () => {
//        const { needToBeFixed } = this.state
//        needToBeFixed.map(item => {
//            return(
//                <div key={item.id}>
//                    <h1>{item.renter}</h1>
//                    <h2>{item.address}</h2>
//                    <p>{item.description}</p>
//                </div>
//            )
//        })
//    }
   componentDidMount = () => {
   this.getRequestItem()
   }

   render() {
     return (
         
        <ShowAllRequests needToBeFixed={this.state.needToBeFixed} />
  
   )
  }
 }