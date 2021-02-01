import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import '../style/main.scss'



import Home from './pages/home'
import DashBoard from './dashboard/dashBoard'
import Request from './pages/requests'
import LandingPage from './pages/landingPage'
import AddHomes from './pages/add-homes'
import  HomeShowPage  from './pages/home-show-page'
import RequestShowPage from './pages/showRequests'

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
      user: 'admin',
      loggedIn: true,
    modalIsOpen:true
      
    }
  }
  render () {
    return (      
      <Router>    
        <DashBoard  loggedIn={this.state.loggedIn} />
          <Switch>
           <Route exact path="/" component={LandingPage} />
           <Route path='/home' component={Home} />           
           <Route path="/requests" component={Request} />
           <Route path='/add-homes' component={AddHomes} />
           <Route path='/home-showpage' component={HomeShowPage} />
           <Route path="/showRequests" component={RequestShowPage} />
           </Switch>
         
        </Router>
      
    )
  }
}

