import React from 'react'
import { NavLink } from 'react-router-dom'
import Empty from '../empty/empty'

const SignedOutLinks = () => {
  return (
    <div>
      <ul className="right">
        <li><NavLink to='/map'>Map</NavLink></li>
        <li><NavLink to='/signup'>Signup</NavLink></li>
        <li><NavLink to='/signin'>Login</NavLink></li>
        <li><NavLink to='/empty'>Empty</NavLink></li>
      </ul>
    </div>
  )
}

export default SignedOutLinks