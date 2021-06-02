import React, { Component } from 'react'
import axios from 'axios'
// import PropertyItem from '../landlord/property'
export default class HomeShowPage extends Component {
  constructor () {
    super()
    this.state = {
      homes: []
    }
  }

  //0: {id: "60171abd19459709748cc33a", propertyName: "Test Property", address: "123 test land ", value: 500000, renter: "Test dude ", …

  componentDidMount () {
    axios
      .get('https://jdm-express-jwt-api.herokuapp.com/allHomes', {
        withCredentials: true
      })
      .then(res =>
        this.setState({
          homes: res.data
        })
      )
      .catch(err => console.error(err))
  }

  render () {
      const { homes } = this.state
    return (
     
          <div className='property-item-container'>
          <div className="property-item-wrapper">
            {homes.map(item => {
              return (
                <div key={item.id} className='property-wrapper'>
                  <div className='image-wrapper'>
                    <img src={item.image} alt='logo' />
                  </div>
                  <div className='content'>
                    <div className='title'>
                      <h1>Property Name:{item.propertyName}</h1>
                    </div>
                    <div className='address'>
                      <h2>Address:{item.address}</h2>
                    </div>
                    <div className='price'>
                      <h2>Value:{item.value}</h2>
                    </div>
                    <div className='renter'>
                      <h1>Renter:{item.renter}</h1>
                    </div>
                  </div>
                </div>
              )
            })}
            </div>
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
