import React, { useContext } from "react";
import "./navigation.css";
import { Link, useLocation } from "react-router-dom";
import { myContext } from "../../App";
import history from "../services/history";

function Navigation() {
  const locus = useLocation();

  const toggleNav = () => {
    const navBar = document.getElementById("nav-bar");
    navBar.style.display === "block"
      ? (navBar.style.display = "none")
      : (navBar.style.display = "block");
  };

  const { state } = useContext(myContext);
  const { user } = state;

  return (
    <nav className="pr-5 navbar justify-content-end">
      <button onClick={toggleNav} className="btn hide">
        <i class="fa fa-bars" aria-hidden="true"></i>
      </button>
      <ul id="nav-bar" data-aos="slide-left">
        <li>
          <Link to="/" className={locus.pathname === "/" ? "active" : ""}>
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/events"
            className={locus.pathname === "/events" ? "active" : ""}
          >
            Events
          </Link>
        </li>
        <li>
          <Link
            to={user.firstname ? "/admin/dashboard" : "/login"}
            className={locus.pathname === "/admin/dashboard" ? "active" : ""}
          >
            Create event
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className={locus.pathname === "/contact" ? "active" : ""}
          >
            Contact
          </Link>
        </li>
        {user.firstname ? (
          <li>
            <Link
              to="/profile"
              className={locus.pathname === "/profile" ? "active" : ""}
            >
              Profile
            </Link>
          </li>
        ) : (
          ""
        )}
      </ul>
    </nav>
  );
  {
    /* <nav class="navbar navbar-expand-lg  navbar-light bg-light" 

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
</nav> */
  }
}

export default Navigation;
