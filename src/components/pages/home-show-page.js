import React, { Component } from 'react'
import axios from 'axios'
import PropertyItem from '../landlord/property'
export default class HomeShowPage extends Component  {
    constructor() {
        super()
        this.state = {
            homes: []
        }
    }

  //0: {id: "60171abd19459709748cc33a", propertyName: "Test Property", address: "123 test land ", value: 500000, renter: "Test dude ", …

    
    
     componentDidMount() {
         axios
         .get('http://localhost:4000/allHomes', { withCredentials: true })  
         .then(res => this.setState({
             homes: res.data
         }))
         .catch(err => console.error(err)) 

     }
         
     render() {
         return (
             
             <div className="show-page-properties">                
                 <PropertyItem homes={this.state.homes} />
     
                       
             </div>
         )

     }
}






// TODO 
// create a class for the properties x

// create state for property items
// map the properites so that they can just be passed in and rendered to the screen
// create a  way to add / delete properties 
// add a way to update the list , change specific things ie tenants, new lease date etc4