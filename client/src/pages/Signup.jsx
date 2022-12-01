import React, {useState} from "react";
import Navbar1 from "../components/Navbar1";
import Footer from "../components/Footer";

function Signup(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return(
        <>
        <Navbar1 />
        <div className='container'>
            <h1>Signup</h1>
            <br />
            <input 
                className="form-control" 
                type="text" 
                placeholder="Enter name" 
                value={name} 
                onChange={e => setName(e.target.value)}
            />
            <br />
            <input 
                className="form-control" 
                type="email" 
                placeholder="Enter email" 
                value={email} 
                onChange={e => setEmail(e.target.value)}
            />
            <br />
            <input 
            className="form-control" 
            type="password" 
            placeholder="Enter password" 
            value={password} 
            onChange={e => setPassword(e.target.value)}
            />
            <br />
            <button type="submit" 
                    className="btn btn-outline-secondary btn-lg"
                    >
                    Sign-Up</button>
        </div>
        <Footer />
        </>
    )
}
export default Signup;