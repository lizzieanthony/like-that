import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (  
        <div className="navbar">
        <Link to="/" className="navheader">Like That</Link>
        <div className="navlinks">
            <Link to="/login">Start Reviewing</Link>
        </div>
       
        </div>

    );
}
 
export default Navbar;