import axios from 'axios'
import React, { Component } from 'react'
import ReactModal from 'react-modal'
import logoImg from '../../style/images/ltApp.png'
ReactModal.setAppElement('.app-wrapper')
//TODO get the state from login modal to the dashboard for use throught the app and keep it persistant
export default class FormModal extends Component {
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      modalIsOpen: true,
      submit: 'Sign In',
      signUp: false,
      role: "renter"
    }
    this.customStyles = {
      content: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'rgb(31,31,52)',
        background: 'radial-gradient(circle, rgba(31,31,52,1) 0%, rgba(32,37,46,0.91290283203125) 35%, rgba(23,12,138,1) 100%)',
        top: '55%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        color: 'white',
        transform: 'translate(-50%, -50%)',
        width: '700px',
        height: '80vh',
        boxShadow: '10px 13px 14px 5px rgba(0,0,0,1.75)'
      },
      overlay: {
        backgroundColor: 'transparent'
      }
    }
  }
  handleLogIn = () => {
      const {username, password} = this.state
    axios
      .post('http://localhost:4000/login', {
          username: username,
          password: password
      })
      .then((res) => {
        this.setState({
        username: res.data.username,
        role: res.data.role
        })
      })
      .catch(err => console.error(err))
  }
  handleRegister = () => {
      const { username, password, role} = this.state
    axios
      .post('http://localhost:4000/register', {
          username: username,
          password: password,
          role: role
      }, 
      {withCredentials: true})      
      .then(res => this.props.formLogin(res.data) )
      .catch(err => console.error(err))
  }
  handleSubmit = e => {
    e.preventDefault()
    const { username, password,role } = this.state
    if (e.target.name === 'login') {
      this.handleLogIn(username, password)
    } else {
      this.handleRegister(username, password, role)
    }
    this.props.formLogin(this.state)
  //   this.setState({
  //     username: '',
  //     password: '',
  //     submit: 'Sign In',
  //     signUp: false
  //   })
   }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render () {
    return (
      <ReactModal style={this.customStyles} isOpen={this.props.modalIsOpen}>
        <form onSubmit={this.handleSubmit} className='login-form'>
          <div className='form-container'>
            <div className='title-wrapper'>
              <img src={logoImg} />
            </div>

            <div className='login-content'>
              <div className='input-wrapper'>
                <label htmlFor='userName'>UserName</label>
                <input
                  type='text'
                  name='username'
                  onChange={this.handleChange}
                  placeholder='User Name'
                  value={this.state.username}
                />
              </div>
              <div className='input-wrapper'>
                <label htmlFor='password'>Password </label>
                <input
                  type='password'
                  name='password'
                  placeholder='Password'
                  value={this.state.password}
                  onChange={this.handleChange}
                />
              </div>
              {this.state.signUp ? (
                <div className='input-wrapper'>
                <label htmlFor="role">Own/Rent</label>
                  <input
                    type='checkbox'
                    placeholder='Owner'
                    onClick={()=> this.setState({role: 'owner'})}
                    value={this.state.role}
                    onChange={this.handleChange}
                  />
                </div>
              ) : null}
              <div className="login-btns">

              <button type='button' className='btn'  onClick={() => this.setState({ signUp: !this.state.signUp })}>
                Sign Up
              </button>

              <button className='btn' onClick={this.handleSubmit} name="login" >
                Log In
              </button>

              <button
                className='btn'
                onClick={this.handleSubmit}
                name="register"                
              >
                Register
              </button>

              </div>
            </div>
          </div>
        </form>
      </ReactModal>
    )
  }
}
