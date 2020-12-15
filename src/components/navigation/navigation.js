import React, {useContext} from 'react';
import './navigation.css';
import {Link} from 'react-router-dom';
import {myContext} from '../../App';
import history from "../services/history";



function Navigation() {

    const {state}=useContext(myContext);
    const {user} = state;
if(user.role === "planner"){
    return <div></div>
}
    return (
      <nav className="pr-5">
      <ul>
          <li><Link to="/">Home</Link> </li>
          <li><Link to={user.firstname? "/admin/dashboard" :"/signup"}>Create event</Link> </li>
          <li> <Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/profile">Profile</Link></li>
      </ul>
</nav>
    )
}

export default Navigation;
