import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({user, setUser}) => {

    function handleLogoutClick() {
        fetch("/logout", {method: "DELETE"}).then((r) => {
            if (r.ok) {
             setUser(null)   
            }
        })
    }

    return (  
        <div className="navbar">
        <Link to="/" className="navheader">Like That</Link>
        <div className="navlinks">
        {!user ? (
            <Link to="/login">Start Reviewing</Link>
        ) : (
            <div>
            <h1>Welcome {user.first_name}!</h1>
            <button onClick={handleLogoutClick}>Logout</button>
            <Link >
            <button to="/new">Add Products</button>
            </Link>
           
            </div>
        )}
        
        </div>
       
        </div>

    );
}
 
export default Navbar;