import React from 'react';
import {Link, Outlet} from 'react-router-dom';


function Navbar2() {
    return(
    <nav className="navbar navbar-default">
        <div className="container">
            <div className="navbar-header">
                <p className="navbar-brand">DAILY JOURNAL</p>
            </div>
            <ul className="nav navbar-nav navbar-right">  
                <li id="home" name="home"><Link to="/">HOME</Link></li>
                <li id="about" name="about"><Link to="/about">ABOUT</Link></li>
                <li id="contact" name="contact"><Link to="/contact">CONTACT</Link></li>
                <li id="logout" name="logout"><Link to="/signin">LOGOUT</Link></li>
            </ul>
        </div>
        <Outlet />
   </nav>
   
    )
}

export default Navbar2;