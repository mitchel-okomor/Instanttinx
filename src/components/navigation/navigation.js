import React, {useContext} from 'react';
import './navigation.css';
import {Link} from 'react-router-dom';
import {myContext} from '../../App';
import history from "../services/history";



function Navigation() {

    const {state}=useContext(myContext);
    const {user} = state;

    return (
//       <nav className="pr-5">
//       <ul>
//           <li><Link to="/">Home</Link> </li>          
//           <li><Link to="/events">Events</Link> </li>
//           <li><Link to={user.firstname? "/admin/dashboard" :"/signup"}>Create event</Link> </li>
//           <li> <Link to="/about">About</Link></li>
//           <li><Link to="/contact">Contact</Link></li>
//         { user.firstname? <li><Link to="/profile">Profile</Link></li>:""}
//       </ul>
// </nav>
<nav class="navbar navbar-expand-lg  navbar-light bg-light" 

>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
    <ul class="navbar-nav">
    <li className="nav-item active"><Link className="nav-link" to="/">Home</Link> </li>          
           <li className="nav-item active"><Link className="nav-link" to="/events">Events</Link> </li>
           <li className="nav-item active"><Link className="nav-link" to={user.firstname? "/admin/dashboard" :"/signup"}>Create event</Link> </li>
           { user.firstname? 
          <li class="nav-item dropdown">
          <Link class="nav-link  dropdown-toggle" to="/profile" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Profile
          </Link>
          <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <Link class="dropdown-item" to="/profile#account">Edit Profile</Link>
            <Link class="dropdown-item" to="/profile#orders" >Orders</Link>
            <Link class="dropdown-item" to="/admin/dashboard" >Manage Events</Link>
          </div>
        </li>
        :""}
           <li className="nav-item active"> <Link className="nav-link" to="/about">About</Link></li>
          <li className="nav-item active"><Link className="nav-link" to="/contact">Contact</Link></li>
    
    </ul>
  </div>
</nav>
    )
}

export default Navigation;
