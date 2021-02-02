import React, { useState, useEffect } from 'react';
import axios from 'axios'

//TODO pull in user id and get messages by id 

const SendMessages = props => {
    const[username, setUserName ] = useState('')
    const[msg, setMsg ] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        axios
        .post('http://localhost:4000/message', {
            username, 
            msg
        }, {withCredentials:true} )
        .then(res => {
            setUserName('')
            setMsg('')
            return res.data
        })
        .catch(err => console.log(err))
    }
  
    return (

        <form onSubmit={handleSubmit} className='message-form'>
            <div className="form-wrapper">
                <div className="content-wrapper">
                <h1>Send your messages here </h1>
                <label htmlFor='userName'>UserName</label>
                <input
                  type='text'
                  name='username'
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder='User Name'
                  value={username}
                />
                
                <label htmlFor='message'>Message</label>
                <textarea
                  rows='10'
                  col="5"
                  name='msg'
                  onChange={(e) => setMsg(e.target.value)}
                  placeholder='Message'
                  value={msg}
                  />

                </div>
                
               
                <button className='btn' type='submit'>Send</button>
                </div>
            
        </form>
    )
}
export default SendMessages