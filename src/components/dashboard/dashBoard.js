import React, {useEffect, useState, Fragment} from 'react'
// import NavBar from '../Navigation/navBar'
// import FormModal from './loginModal'

// TODO
// add login functionality for user or admin so that it will add admin buttons to the page

const DashBoard = props => {
  const [users , setUsers] = useState({
    username: props.username ||'',
    loggedIn: props.loggedIn ||'',
    role: props.role||''
  })
  useEffect(()=> {
    setUsers({
      username: props.username,
      loggedIn: props.loggedIn,
      role: props.role
    })
  })
  return (
    <div className='dashboard-container'>
      hi {users.username}
    </div>
  )
}
export default DashBoard
