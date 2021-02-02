import React, { useContext } from "react";
import "./navigation.css";
import { Link, useLocation } from "react-router-dom";
import { myContext } from "../../App";

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
        <i className="fa fa-bars" aria-hidden="true"></i>
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
            to={user ? "/admin/dashboard" : "/login"}
            className={locus.pathname === "/admin/dashboard" ? "active" : ""}
          >
            Create events
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
        {user ? (
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
}

export default Navigation;
