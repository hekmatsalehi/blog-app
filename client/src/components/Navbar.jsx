import React from 'react'
import { useContext } from 'react'
import {Link} from 'react-router-dom'
import { AuthContext } from '../context/authContext'


function Navbar() {
  const {currentUser, logout} = useContext(AuthContext)
  return (
    <div className='navbar'>
      <div className='container'>
        <Link className='logo link' to='/'>Sky Blog</Link>
        <div className='links'>
          <Link className='link' to='/?cat=art'>
            <h6>ART</h6>
          </Link>
          <Link className='link' to='/?cat=science'>
            <h6> SCIENCE</h6>
          </Link>
          <Link className='link' to='/?cat=technology'>
            <h6>TECHNOLOGY</h6>
          </Link>
          <Link className='link' to='/?cat=cinema'>
            <h6>CINEMA</h6>
          </Link>
          <Link className='link' to='/?cat=design'>
            <h6>DESIGN</h6>
          </Link>
          <Link className='link' to='/?cat=food'>
            <h6>FOOD</h6>
          </Link>
          <span className='username'>{currentUser?.username}</span>
          {currentUser ? 
            <span className='login-logout' onClick={logout}>Logout</span>
          : <Link className='link login-logout' to='/login' >Login</Link>}
          <span className='write'>
            <Link className='link' to='/write'>Write</Link>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Navbar