import React, { useEffect, useState } from 'react'
import axios from 'axios'
// import MessageTable  from '../helpers/messageTable.js'
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
  const rows = data.map(item => {
    return (
      { id: item.id,
        message: item.msg,
        from: item.from,
        timestamp: item.timestamps.createdAt
      }
    )
  })
  console.log(rows)
  return (
    
  
    <div className="messages-container">
    <div className='message-container'>
    <h1>Messages</h1>
    <table className='messagesTable'>
    <thead>

    
  <tr>
    <th>From</th>
    <th>Message</th>
    <th>sent@</th>
  </tr>
</thead>
      {data.map(item => {
        return (
          <tbody key={item.id}>
          <tr >
            <td>{item.from}</td>
            <td>{item.msg}</td>
            <td>{item.timestamps.createdAt}</td>
          </tr>
          </tbody>
        )
      })}
      </table>
    </div>
    </div>
  )
}
export default Messaging
