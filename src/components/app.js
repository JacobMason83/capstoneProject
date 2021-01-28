import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import '../style/main.scss'




import DashBoard from './dashboard/dashBoard'
import Request from './pages/requests'
import LandingPage from './pages/landingPage'

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
  constructor (props) {
    super(props)
    this.state = {
      user: 'admin',
      loggedIn: true,
      modalIsOpen:false
      
    }
  }
  render () {
    return (
      <div className='app-wrapper'>
        <Router>
          

          <Switch>
           <Route exact path="/" component={LandingPage} />
           <Route exact path="/dashboard" component={DashBoard} />
           <Route path="/requests" component={Request} />
           </Switch>
         
        </Router>
      </div>
    )
  }
}

