import React, {useContext} from "react";
import { Link } from "react-router-dom";
import {myContext} from '../../App';
import "./header.css";
import logout from "../helpers/Logout";

const Header = (props) => {
const {state} = useContext(myContext);
const {user, cart} = state;



if(user.firstname){

  return(
    <header>
    <div className="row">
      <div className="col-ms-12 col-ms-6 col-lg-6 col-xl-6">
        <h1 className="logo">
          <Link to="/"><img src={require('../../images/logo.png')} /></Link>
        </h1>
      </div>
      <div className="col-ms-12 col-ms-6 col-lg-6 col-xl-6">
        <div className="user-area float-right">
          <ul>
          <li className="mr-3 pr-3">
  {  user.role ==="planner"?"":<Link to="/cart" className="cart"><i className="fa fa-cart-arrow-down" aria-hidden="true"></i>
  {cart.length >0 ?<span className='badge badge-warning' id='lblCartCount'> {cart.length} </span> : ""}
</Link>}
            </li>
            <li className="mr-5">
  <Link to="/profile"><i className="fa fa-user mr-1" aria-hidden="true"></i>
{user.firstname}</Link>
            </li>
            <li onClick={logout}>
  <Link to=""><i class="fa fa-sign-out mr-1" aria-hidden="true"></i>
Logout</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
  )
}

  return (
    <header>
      <div className="row">
        <div className="col-ms-12 col-ms-6 col-lg-6 col-xl-6">
          <h1 className="logo">
            <Link to="/"><img src={require('../../images/logo.png')} /></Link>
          </h1>
        </div>
        <div className="col-ms-12 col-ms-6 col-lg-6 col-xl-6">
          <div className="user-area float-right">
            <ul>
            <li>
                <Link to="/cart" className="cart mr-3 pr-3"><i className="fa fa-cart-arrow-down" aria-hidden="true"></i>
               {cart.length >0 ?<span className='badge badge-warning' id='lblCartCount'> {cart.length} </span> : ""}
</Link>
              </li>
              <li>
                <Link to="/login"><i class="fa fa-sign-in mr-1" aria-hidden="true"></i>
Login</Link>
              </li>
              <li>
                <Link to="/signup">Signup</Link>
              </li>
             
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
