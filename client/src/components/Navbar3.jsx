import React from 'react';
import {Link, Outlet} from 'react-router-dom';


function Navbar3() {
    return(
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container">
            <div className="navbar-header">
                <p className="navbar-brand">DAILY JOURNAL</p>
            </div>
            <ul className="navbar-nav">  
                <li className="nav-item" id="compose" name="compose"><Link className="nav-link active" to="/compose">COMPOSE</Link></li>
                <li className="nav-item" id="home" name="home"><Link className="nav-link active" to="/">HOME</Link></li>
                <li className="nav-item" id="about" name="about"><Link className="nav-link active" to="/about">ABOUT</Link></li>
                <li className="nav-item" id="contact" name="contact"><Link className="nav-link active" to="/contact">CONTACT</Link></li>
                <li className="nav-item" id="logout" name="logout"><Link className="nav-link active" to="/signin">LOGOUT</Link></li>
            </ul>
        </div>
        <Outlet />
   </nav>
    )
}

export default Navbar3;