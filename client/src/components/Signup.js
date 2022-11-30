import { useNavigate } from "react-router-dom";
import React, {useState} from 'react';

const Signup = ({onNewUser}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [first_name, setFirst_name] = useState("")
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate()


    function handleSubmit(event)  {
        event.preventDefault();
        // debugger
        fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({username, password, first_name: first_name}),
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

         <label>First Name:</label>
         <input
           type="text"
           required
           value={first_name}
           onChange={(e) => setFirst_name(e.target.value)}
         />
         {errors.map((err) => (
            <p key={err}>{err}</p>
          ))}
        <input className="newButton" type="submit" value="Submit" />
        </form>
    
      </div>
      
     );
}
 
export default Signup;