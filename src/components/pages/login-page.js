import React, { useState, Fragment, useEffect } from 'react'
import axios from 'axios'
import logoImg from '../../style/images/lease-application4.jpg'

const LoginPage = props => {
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [open, setOpen] = useState(false)
  const [role, setRole] = useState('')
  
  
  const handleLogIn = () => {    
  axios
    .post('https://jdm-express-jwt-api.herokuapp.com/login', {
        username: username,
        password: password
    }, {withCredentials: true})
    .then((res) => {
      return res.data
    }).then(results => {        
        setRole(results.data.role)
        setUserName(results.data.username)
      props.handleSuccessfulLogin({
        username: username,
        role: role,
        id: results.data._id,
         
      })
      
    })
    .catch(err => console.error(err))
  }
  const handleSubmit = (e) => {
      e.preventDefault()
      handleLogIn();
      props.history.push('/dashboard')
      
  }


  const handleClick = () => {
    if (open === false) {
      setOpen(true)
    } else {
      setOpen(false)
    }
  }
  useEffect(() => {
    setUserName('')
   setPassword('')
     setOpen(false)
     setRole('')
      
  }, [])
  return (
    <div className='login-container'>
      <div className='header-wrapper' onClick={() => handleClick()}>
        <h1>
          <span>L</span>
          <span>o</span>
          <span>g</span>
          <span>i</span>
          <span>n</span>
          <span>h</span>
          <span>e</span>
          <span>r</span>
          <span>e</span>
        </h1>
      </div>
        {open === false ? (
          null
        ) : (
      <form className='login-wrapper' onSubmit={handleSubmit}>
        <div className='title-wrapper'>
          <img src={logoImg} />
        </div>
          <div className='login-content' >
            <div className='input-wrapper'>
              <label htmlFor='userName'>UserName</label>
              <input
                type='text'
                name='username'
                onChange={e => setUserName(e.target.value)}
                placeholder='User Name'
                value={username}
              />
            </div>
            <div className='input-wrapper'>
              <label htmlFor='password'>Password </label>
              <input
                type='password'
                name='password'
                placeholder='Password'
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>
            <div className='login-btns'>
              <button className='login-btn' type='submit'>
                Log In{' '}
              </button>
            </div>
          </div>
      </form>
        )}
    </div>
  )
}

export default LoginPage
