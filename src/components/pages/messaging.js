import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios'
//Todo get userinfo from state and use it to pass the id to the user message component
const Messaging = props => {
  const [username, setUsername] = useState('')

  const [data, setData] = useState([])

  useEffect(() => {
    setUsername(props.username)
    axios
      .get(`https://jdm-express-jwt-api.herokuapp.com/messages/${username}`, {
        withCredentials: true
      })
      .then(res => {
        setData(res.data)
      })
      .catch(err => console.error(err))
  }, [])
  return (
    <Fragment>
    
  
    <div className='message-container'>
      {data.map(item => {
        return (
          <div className='get-messages' key={item.id}>
            <div className='message-header'>
              <h1>From: {item.from}</h1>
            </div>
            <div className='message-wrapper'>
              <p>Message: {item.msg}</p>
              <h6>sent at: {item.timestamps.createdAt}</h6>
            </div>
          </div>
        )
      })}
    </div>
    </Fragment>
    
  )
}
export default Messaging
