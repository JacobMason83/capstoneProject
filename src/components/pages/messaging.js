import React, { useEffect, useState } from "react"
import axios from 'axios'
//Todo get userinfo from state and use it to pass the id to the user message component
const Messaging = (props) => {
    const [username, setUsername ] = useState(props.username)
    const [message, setMessage ] = useState('')
    const [data, setData ] = useState([])
   
    useEffect(() => {
        axios
        .get(`http://localhost:4000/messages`, {withCredentials: true})
        .then(res => {
            setData(res.data)
        })
        
        
        .catch(err => console.error(err))
    })
    return (
        <div className='message-container'>
            hi from messaging
        </div>
    )
}
export default Messaging

// TODO 
// add functionality to commuicate with landord
// add functionality to communicate with tenant
// bring in a react library to help with messaging functionality 
// either make it simple or make it complicated not sure yet?