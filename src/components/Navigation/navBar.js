import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class NavBar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      user: 'admin',
      loggedIn: false
    }
  }
  authorizedUser = () => {
    
    if (this.state.user === 'admin') {
      return [
        <div key="admin">
          <div className='nav-wrapper'>
            <NavLink
              to='/portfolio'
              activeClassName='active'
              className='nav-link'
            >
              portfolio
            </NavLink>
          </div>
          <div className='nav-wrapper'>
            <NavLink
              to='/addRemoveUser'
              activeClassName='active'
              className='nav-link'
            >
              AddRemove Tenant
            </NavLink>
          </div>
        </div>
      
    ]
    }
  }

  render () {
    return (
      <div>
        <div className='name-container'>
          <h2>LandLord Tenant App</h2>
          <div className='name-wrapper'>
            <h1>Jacobs Page</h1>
          </div>
        </div>
        <div className='nav-container'>
          <div className='nav-wrapper'>
            <NavLink to='/home' activeClassName='active' className='nav-link'>
              Home
            </NavLink>
          </div>
          <div className='nav-wrapper'>
            <NavLink
              to='/message'
              activeClassName='active'
              className='nav-link'
            >
              Messaging
            </NavLink>
          </div>
          <div className='nav-wrapper'>
            <NavLink
              to='/maitanence-requests'
              activeClassName='active'
              className='nav-link'
            >
              Maitenance Requests
            </NavLink>
          </div>
          <div className='nav-wrapper'>
            <NavLink
              to='/pay-rent'
              activeClassName='active'
              className='nav-link'
            />
              
            {this.authorizedUser()}
          </div>
        </div>
      </div>
    )
  }
}
