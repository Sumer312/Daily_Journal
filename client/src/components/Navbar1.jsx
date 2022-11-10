import React from 'react';
import {Link, Outlet} from 'react-router-dom';


function Navbar1() {
    return(
    <nav className="navbar navbar-default">
        <div className="container">
            <div className="navbar-header">
                <p className="navbar-brand">DAILY JOURNAL</p>
            </div>
            <ul className="nav navbar-nav navbar-right">  
                <li id="compose" name="compose"><Link to="/signin">SIGNIN</Link></li>
                <li id="home" name="home"><Link to="/signup">SIGNUP</Link></li>
                <li id="about" name="about"><Link to="/admin">ADMIN</Link></li>
                <li id="logout" name="logout"><Link to="/signin">LOGOUT</Link></li>
            </ul>
        </div>
        <Outlet />
   </nav>
   
    )
}

export default Navbar1;