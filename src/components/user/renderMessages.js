import Axios from 'axios';
import React, { Component } from 'react';
import axios from 'axios'
//TODO pull in user id and get messages by id 

export default class RenderMessages extends Component {

   constructor() {
     super()
    this.state ={
        messages: [],
        username: ''
    }
   }
   componentDidUpdate() {
       axios
       .get('http://localhost:4000/messages')
   }

   render() {
     return (
         <div>

   </div>
   )
  }
 }