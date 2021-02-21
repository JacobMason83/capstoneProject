import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import axios from 'axios'
import '../style/main.scss'

import NavBar from './Navigation/navBar'
import DashBoard from './pages/dashBoard'
import Request from './pages/requests'
import LoginModal from './login/loginModal'
import AddHomes from './pages/add-homes'
import HomeShowPage from './pages/home-show-page'
import RequestShowPage from './pages/showRequests'
import PayRent from './pages/payRent'
import Messaging from './pages/messaging'
import SendMessages from './landlord/sendMessages'
import LoginPage from './pages/login-page'

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
      id: '',
      token: ''
    }
  }
  handleSuccessfulLogin = data => {
    console.log('data', data)
    this.setState({
      username: data.username,
      role: data.role,
      loggedInStatus: 'LOGGED_IN',
      id: data.id,
      token: data.token
    })
  }

  componentDidMount () {
    const { id, role, username, token } = this.state
    axios
      .post(
        `https://jdm-express-jwt-api.herokuapp.com/check-login`,
        {
          token,
          id
        },
        { withCredentials: true }
      )
      .then(res => {
        console.log('i did it i made it stay')
        if (res.data.message === 'logged-in') {
          this.setState({
            loggedInStatus: 'LOGGED-IN',
            role: role,
            username: username,
            token: res.data.token
          })
        } else {
          this.setState({
            loggedInStatus: 'NOT-LOGGED-IN'
          })
          this.props.history.push('/')
        }
      })
  }

  render () {
    return (
      <Router>
        <NavBar userName={this.state.username} roles={this.state.role} />

        <Switch>
        
          <Route
            exact path='/'
            render={props => (
              <LoginPage
                {...props}
                handleSuccessfulLogin={this.handleSuccessfulLogin}
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
          <Route
            path='/messages'
            render={props => (
              <Messaging {...props} username={this.state.username} />
            )}
          />
          <Route path='/send-messages' component={SendMessages} />
        </Switch>
      </Router>
    )
  }
}
