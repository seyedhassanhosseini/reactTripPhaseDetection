import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedinLinks";
import SignedOutLinks from "./SignedOutJs";

const NavBar = () => {
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to='/' className="brand-logo">Trips</Link>
        <SignedInLinks/>
        <SignedOutLinks/>
        
      </div>
    </nav>   
  )
}
export default NavBar

