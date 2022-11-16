import React from "react";
import {Link} from "react-router-dom";


const Login = () => {
    return ( 
        <div> Lets log in! 
        <br />
        <Link to="/signup">Don't have an account? Sign Up</Link>
        </div>
     );
}
 
export default Login;