import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Table from 'react-bootstrap/Table'
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
  let rows = data.map(item => {
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
    <Table colSpan={2} striped bordered hover size="sm">
  <thead>
  <tr>
    <th colSpan={2}>From</th>
    <th colSpan={2}>Message</th>
    <th colSpan={2}>sent@</th>
  </tr>
</thead>
      {rows.map(item => {
        const timeStamp =  Date(item.timestamps.createdAt)
        return (
          <tbody key={item.id}>
          <tr colSpan={2} >
            <td colSpan={2}>{item.from}</td>
            <td colSpan={2}>{item.msg}</td>
            <td colSpan={2}>{timeStamp}</td>
          </tr>
          </tbody>
        )
      })}
      </Table>
    </div>
    </div>
  )
}
export default Messaging
