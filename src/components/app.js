import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import '../style/main.scss'



import DashBoard from './dashboard/dashBoard'
import MaitanenceRequest from './pages/maitanenceRequests'

// TODO 
// add routes for messaging, maitanence requests
// portfolio , add remove tenants, for admin 
// add payrent functionality and routes 
// create backend and connect to it 
// use express backend
// finalize color scheme and get variable page
// refactor some code into mixins 
// create a footer page 
// if user or landlord is logged in then will display on the sidebar
// create a add/remove tenant page with dropzone functionality for images, and leases etc 

export default class App extends Component {
  constructor () {
    super()
    this.state = {
      user: 'Admin',
      loggedIn: true,
      
    }
  }
  render () {
    return (
      <div className='app-wrapper'>
        <Router>
          <DashBoard />

          <Switch>
           <Route exact path="/" component={DashBoard} />
           <Route path="/maitenance-requests" component={MaitanenceRequest} />
           </Switch>
         
        </Router>
      </div>
    )
  }
}

