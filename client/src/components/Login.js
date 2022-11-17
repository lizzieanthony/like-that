import React, { useState } from "react";
import {Link, useNavigate} from "react-router-dom";


const Login = ({ setUser}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();


function handleSubmit(e) {
    e.preventDefault()
    const user = {username: username, password: password}
    fetch("/login", {
        method: "POST", 
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(user)
    })
    .then((r) => {
        if (r.ok) {
            r.json().then((user) => setUser(user));
            navigate("/")
          } else {
            r.json().then((err) => setErrors(err.errors));
          }
    })
}


    return ( 
     <div className="new"> 
      <form onSubmit={handleSubmit}>
       <label>Username:</label>
        <input
          type="text"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
       <label>Password:</label>
        <input
          type="text"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Login</button>
        {errors.map((err) => (
            <p key={err}>{err}</p>
          ))}
      </form>
        <h2>Don't have an account?</h2>
        <button>
        <Link to="/signup"> Sign Up</Link>
        </button>
        
        </div>
     );
}
 
export default Login;