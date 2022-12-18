import React from 'react'
import { Link } from 'react-router-dom'
import '../CSS/login.css'


function Login() {
  return (
    <div className='login-page'>
      <div className="login">
        <div className="welcome">
          <h1>Welcome to AnimOs!</h1>
          <h1 className='login-bg'>AnimeOs</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, sed.</p>
        </div>
        <form action="">
          <h1>Login</h1>
          <input placeholder='Username' />
          <input placeholder='Password' type="password"/>
          <p style={{color: 'red', marginLeft: '10px'}}>This is just a dummy page click login to continue</p>
          <Link className='login-btn' to={'./Home'} >Login</Link >
        </form>
      </div>
    </div>
  )
}

export default Login