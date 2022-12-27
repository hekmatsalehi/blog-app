import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios'

function Register() {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
    password: ''
  })
  const [error, setError] = useState(null)

  const navigate = useNavigate()
  const handleChange = (e) => {
    setInputs((prev) => ({...prev, [e.target.name]: e.target.value}))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      setError(null)
      await axios.post('/auth/register', inputs)
      navigate('/login')
    } catch (error) {
      setError(error.response.data)
    }
  }

  return (
    <div className='auth'>
      <h1>Register</h1>
      <form>
        <input required type='text' placeholder='username' name='username' onChange={handleChange} />
        <input required type='email' placeholder='email' name='email' onChange={handleChange}/>
        <input required type='password' placeholder='password' name='password' onChange={handleChange}/>
        {error && <p>{error}</p>}
        <button onClick={handleSubmit}>Register</button>
        <span>Do you have an account? <Link className='link' to="/login">Sign in</Link></span>
      </form>
    </div>
  )
}

export default Register