import React from 'react';
import {Link} from "react-router-dom";
import './header.css';
import logout from '../helpers/Logout';


const Header = (props)=>{
    return(
<header>
<div className="row">
    <div className="col-ms-12 col-ms-6 col-lg-6 col-xl-6">
<h1 className="logo">
<Link to="/">Instant Tinx</Link> 
            </h1>
    </div>
    <div className="col-ms-12 col-ms-6 col-lg-6 col-xl-6">
        <div class="user-area float-right">
        <ul>
            <li><Link to="/login">Log In</Link></li>
            <li><Link to="/signup">Signup</Link></li>
            <li><a href="#"><img src={require("../../images/shoppingCart.svg")} /></a></li>
        </ul>                     
</div>
    </div>

</div>

            

</header>
    )
}

export default Header;