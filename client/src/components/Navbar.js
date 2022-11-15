import { Link } from "react-router-dom";

const Navbar = () => {
    return (  
        <div className="navbar">
        <Link to="/" className="navheader">Like That</Link>
        <div className="navlinks">
            <ul>login</ul>
            <ul>signup</ul>
        </div>
       
        </div>

    );
}
 
export default Navbar;