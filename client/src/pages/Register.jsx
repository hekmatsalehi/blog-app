import React from 'react'
import {Link} from 'react-router-dom';

function Register() {
  return (
    <div className='auth'>
      <h1>Register</h1>
      <form>
        <input required type='text' placeholder='username'/>
        <input required type='email' placeholder='email'/>
        <input required type='password' placeholder='password'/>
        <p>This is an error</p>
        <button>Login</button>
        <span>Do you have an account? <Link to="/login">Sign in</Link></span>
      </form>
    </div>
  )
}

export default Register