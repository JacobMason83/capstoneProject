import React, { useState, Fragment } from 'react'
import logoImg from '../../style/images/ltApp.png'


const LoginPage = props => {
    const [username, setUserName] = useState('')
    const [password, setPassword ]= useState('')
    const [open, setOpen ] = useState(false)

    const handleClick = () => {
        if(open === false) {
            setOpen(true)
        } else {
            setOpen(false)
        }
    }
  return (
    <div className='login-container'>
    <div className="header-wrapper" onClick={() => handleClick()}>
        
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
      <div className='login-wrapper'>
        <div className='title-wrapper'>
          <img src={logoImg} />
        </div>
        {open === false ? (
            <Fragment>
                
            </Fragment>
        ) : (

        <div className='login-content'>
          <div className='input-wrapper'>
            <label for='userName'>UserName</label>
            <input
              type='text'
              name='username'
              onChange={(e) => setUserName(e.target.value)}
              placeholder='User Name'
              value={username}
            />
          </div>
          <div className='input-wrapper'>
            <label for='password'>Password </label>
            <input
              type='password'
              name='password'
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
            <div className="login-btns">
            <button className="login-btn" type='submit'>Log In </button>
            </div>
        </div>
        )}
      </div>
    </div>
  )
}

export default LoginPage
