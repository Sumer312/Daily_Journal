import React from 'react';
import {Link, Outlet} from 'react-router-dom';

function Footer(){
    return(
        <div className="footer-padding">
            <div className="footer">
                <p><Link to="/">Daily Journal</Link></p>
            </div>
            <Outlet />
        </div>
    )
}

export default Footer;