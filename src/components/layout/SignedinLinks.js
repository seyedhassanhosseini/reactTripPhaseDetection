import React from "react";
import { NavLink } from "react-router-dom";
import Empty from "../empty/empty";

const SignedInLinks = () => {
  return (
    <ul className="right">
      <li><NavLink to='/create'> New Project </NavLink></li>
      <li><NavLink to='/'>Log Out</NavLink></li>
      <li><NavLink to='/' className='btn btn-floating pink lighten-1'>Seyed</NavLink></li>
    </ul>  
  )
}
export default SignedInLinks