import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import '../style/main.scss'

import NavBar from './Navigation/navBar'
import DashBoard from './dashboard/dashBoard'
import Request from './pages/requests'
import LoginModal from './dashboard/loginModal'
import AddHomes from './pages/add-homes'
import HomeShowPage from './pages/home-show-page'
import RequestShowPage from './pages/showRequests'
import PayRent from './pages/payRent'
import Messaging from './pages/messaging'
import SendMessages from './user/sendMessages'

// TODO
// add routes for messaging, maitanence requestsxxx
// portfolio , add remove tenants, for admin x
// add payrent functionality and routes x
// create backend and connect to it x
// use express backendx
// finalize color scheme and get variable page
// refactor some code into mixins x
// create a footer page
// if user or landlord is logged in then will display on the sidebar
// create a add/remove tenant page with dropzone functionality for images, and leases etc ?

export default class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      role: '',
      loggedInStatus: 'NOT_LOGGED_IN',
      modalIsOpen: true,
      id: ""
    }
  }
  handleSuccessfulLogin = data => {
    console.log('data', data)
    this.setState({
      username: data.username,
      role: data.role,
      loggedInStatus: 'LOGGED_IN',
      id: data.id
    })
  }

  render () {
    return (
      <Router>
        <NavBar
          username={this.state.username}
          role={this.state.role}
          loggedIn={this.state.loggedInStatus}
        />
        <Switch>
          <Route
            exact
            path='/'
            render={props => (
              <LoginModal
                {...props}
                handleSuccessfulLogin={this.handleSuccessfulLogin}
                modalIsOpen={this.state.modalIsOpen}
              />
            )}
          />
          <Route
            path='/dashboard'
            render={props => (
              <DashBoard
                {...props}
                role={this.state.role}
                username={this.state.username}
              />
            )}
          />
          <Route path='/requests' component={Request} />
          <Route path='/add-homes' component={AddHomes} />
          <Route path='/home-showpage' component={HomeShowPage} />
          <Route path='/showRequests' component={RequestShowPage} />
          <Route path='/pay-rent' component={PayRent} />
          <Route path='/messages' render={props => (
            <Messaging 
              {...props}
              username={this.state.username} id={this.state.id}
            />)} />
          <Route path='/send-messages' component={SendMessages} />
        </Switch>
      </Router>
    )
  }
}
