import React, { useState, useEffect } from 'react';
import axios from 'axios'

//TODO pull in user id and get messages by id 

const SendMessages = props => {
    const[username, setUserName ] = useState('')
    const[msg, setMsg ] = useState('')
    const [from , setFrom] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        axios
        .post('http://localhost:4000/message', {
            username, 
            msg,
            from
        }, {withCredentials:true} )
        .then(res => {
            setUserName('')
            setMsg('')
            setFrom('')
            
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
                  placeholder='To'
                  value={username}
                />
                <label htmlFor='userName'>UserName</label>
                <input
                  type='text'
                  name='from'
                  onChange={(e) => setFrom(e.target.value)}
                  placeholder='From'
                  value={from}
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
                
               
                <button className='message-btn' type='submit'>Send</button>
                </div>
            
        </form>
    )
}
export default SendMessages