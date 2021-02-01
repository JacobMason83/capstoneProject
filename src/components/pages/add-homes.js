
import React, { Component } from 'react'
import axios from 'axios'
// TODO change to react dropzone and style accordingly
// TODO add a lease dropzone if possible

export default class AddHomes extends Component {
  constructor (props) {
    super()
    this.state = {
      propertyName: '',
      address: '',
      value: '',
      renter: '',
      image: 'https://unsplash.com/s/photos/random-house'
    }
  }

  handleChange = e => {
    e.preventDefault()
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit = () => {
      const {propertyName, address,value,renter,image} = this.state
    axios
      .post('http://localhost:4000/homes',{
          propertyName,
          address,
          value,
          renter,
          image
      }, {withCredentials: true})
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err))
  }
  render () {
    return (
      <div className='add-homes-form'>
        <form className='landlord-form' onSubmit={this.handleSubmit}>
          <h1>Add Your Properties Here:</h1>
          <div className='input-wrapper'>
            <label htmlFor='propertyName'>Property Name </label>
            <input
              type='text'
              name='propertyName'
              value={this.state.propertyName}
              placeholder='Property Name'
              onChange={this.handleChange}
            />
          </div>
          <div className='input-wrapper'>
            <label htmlFor='address'>Address </label>
            <input
              type='text'
              name='address'
              value={this.state.address}
              placeholder='Address'
              onChange={this.handleChange}
            />
          </div>
          <div className='input-wrapper'>
            <label htmlFor='value'>Property Value</label>
            <input
              type='text'
              name='value'
              value={this.state.value}
              placeholder='Property Value'
              onChange={this.handleChange}
            />
          </div>
          <div className='input-wrapper'>
            <label htmlFor='renter'>Renter Name </label>
            <input
              type='text'
              name='renter'
              value={this.state.renter}
              placeholder='Renter Name'
              onChange={this.handleChange}
            />
          </div>
          <div className='input-wrapper'>
            <label htmlFor='image'>Image of Property </label>
            <input
              type='text'
              name='image'
              value={this.state.image}
              placeholder='Image of Property/leave blank'
              onChange={this.handleChange}
            />
          </div>
          <button className='btn' type="submit">Add-Home</button>
        </form>
      </div>
    )
  }
}