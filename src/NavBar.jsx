import React from "react";
import { Link } from "react-router-dom";
import Home from "./Home";


function NavBar() {
  return (
    <div className="navBar">
      <Link to="/" >Our Tours </Link>
    
     <div className="navBar">
      <Link to="/reviews" > Our reviews </Link>
      </div>
      </div>
  )
}

export default NavBar;