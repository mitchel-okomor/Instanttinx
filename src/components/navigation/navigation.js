import React from 'react';
import './navigation.css';
import {Link} from 'react-router-dom';


function Navigation() {
    return (
      <nav className="pr-5">
      <ul>
          <li><Link to="/">Home</Link> </li>
          <li> <Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
      </ul>
</nav>
    )
}

export default Navigation;
