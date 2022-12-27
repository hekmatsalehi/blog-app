import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios'


function Login() {
  const [inputs, setInputs] = useState({
    username: '',
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
      if(!inputs.username || !inputs.password) return;
      setError(null)
      await axios.post('/auth/login', inputs)
      navigate('/')
      
      
    } catch (error) {
      setError(error.response.data)
    }
  }

  return (
    <div className='auth'>
      <h1>Login</h1>
      <form>
        <input required type='text' placeholder='username' name='username' onChange={handleChange}/>
        <input required type='password' placeholder='password' name='password' onChange={handleChange}/>
        {error && <p>{error}</p>}
        <button onClick={handleSubmit}>Login</button>
        <span>Don't have an account? <Link className='link' to="/register">Register</Link></span>
      </form>
    </div>
  )
}

export default Login