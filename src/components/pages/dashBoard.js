import React, {useEffect, useState, Fragment} from 'react'


// TODO
// add login functionality for user or admin so that it will add admin buttons to the page

const DashBoard = props => {
  const [username, setUsername] = useState('')

  useEffect(()=> {
    setUsername(props.username)
    }, [props.username] )

  return (
    <div className='dashboard-container'>
      <h1>
      hi {username}
      <p> Thanks for Joining our Community and appreciate the continued support</p>
      </h1>
    </div>
  )
}
export default DashBoard
