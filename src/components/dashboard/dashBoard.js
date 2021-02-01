import React, {useEffect, useState} from 'react'
import NavBar from '../Navigation/navBar'

// TODO
// add login functionality for user or admin so that it will add admin buttons to the page

const DashBoard = props => {
  const [users , setUsers] = useState({
    username: '',
    loggedIn: '',
    role: ''
  })
  useEffect(()=> {
    setUsers({
      username: props.username,
      loggedIn: props.loggedIn,
      role: props.role
    })
  }, [])
  return (<NavBar users={users} />)
}
export default DashBoard
