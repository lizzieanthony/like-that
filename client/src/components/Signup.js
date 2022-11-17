import { useNavigate, Link } from "react-router-dom";
import React, {useState} from 'react';

const Signup = ({onNewUser}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("")
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate()


    function handleSubmit(event)  {
        event.preventDefault();
        fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username, password, first_name: firstName 
            }),
        }).then((r) => {
            if (r.ok) {
                r.json().then((user) => onNewUser(user))
                navigate("/")
            } else {
                r.json().then ((err) => setErrors(err.errors));
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

         <label>First Name::</label>
         <input
           type="text"
           required
           value={firstName}
           onChange={(e) => setFirstName(e.target.value)}
         />
        </form>
        <button>
        <Link to="/"> Create Account</Link>
        </button>
      </div>
      
     );
}
 
export default Signup;