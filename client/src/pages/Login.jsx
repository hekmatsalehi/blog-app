import React from 'react'
import {Link} from 'react-router-dom';

function Login() {
  return (
    <div className='auth'>
      <h1>Login</h1>
      <form>
        <input required type='text' placeholder='username'/>
        <input required type='password' placeholder='password'/>
        <p>This is an error</p>
        <button>Login</button>
        <span>Don't have an account? <Link to="/register">Register</Link></span>
      </form>
    </div>
  )
}

export default Login