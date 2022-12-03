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
            <h2>Welcome {user.first_name}!</h2>
            <button onClick={handleLogoutClick}>Logout</button>
            <Link to="/new">
            <button >Add Products</button>
            </Link>
           
            </div>
        )}
        
        </div>
       
        </div>

    );
}
 
export default Navbar;