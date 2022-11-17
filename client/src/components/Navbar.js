import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({user}) => {
    return (  
        <div className="navbar">
        <Link to="/" className="navheader">Like That</Link>
        <div className="navlinks">
        {!user ? (
            <Link to="/login">Start Reviewing</Link>
        ) : (
            <h1>welcome {user.first_name}</h1>
        )}
           
        </div>
       
        </div>

    );
}
 
export default Navbar;