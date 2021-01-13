import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import '../style/main.scss'
import LoginPage from './loginPage'
import NavBar from './Navigation/navBar'
import DashBoard from './dashboard/dashBoard'
import Home from './pages/home'

export default class App extends Component {
  constructor () {
    super()
    this.state = {
      user: 'Admin',
      loggedIn: true
    }
  }
  render () {
    return (
      <div className='app-wrapper'>
        <Router>
          <NavBar />
          <div>
           <Route exact path="/" component={LoginPage} />
           <Route path="/dashboard" component={DashBoard} />
          </div>
        </Router>
      </div>
    )
  }
}

