import React, {useContext, useEffect} from "react";
import { Link } from "react-router-dom";
import {myContext} from '../../App';
import "./header.css";
import logout from "../helpers/Logout";
import checklogin from '../helpers/checkLogin';
import axios from 'axios';
import {SERVER_URL, SET_USER} from '../helpers/constant';

const Header = (props) => {
const {state, dispatch}=useContext(myContext);
const {user, cart} = state;

const id =localStorage.getItem('userId');


useEffect(()=>{
  checklogin();
  fetchUser();
}, 
[]);


//fetch user info when app starts
const fetchUser = async () => {
    const url = SERVER_URL + "/api/user/" +id;

if(id){
 try {
    const response = await axios.get(url,{
      headers: {
        "Authorization": localStorage.getItem('token')
    }});
    if (response.status === 200) {
      const data = response.data;
      dispatch({type:SET_USER, payload: data});
      console.log(data);

    //  dispatch({ type: "SET_USER", payload: data });
    }
  } catch (error) {
    console.log(error);
  }
}
 return;
};


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
          <li className="mr-3">
  {  user.role ==="planner"?"":<Link to="/cart" className="cart"><i className="fa fa-cart-arrow-down" aria-hidden="true"></i>
  {cart.length >0 ?<span className='badge badge-warning' id='lblCartCount'> {cart.length} </span> : ""}
</Link>}
            </li>
            <li className="mr-5">
  <Link to="/user"><i className="fa fa-user-o mr-1" aria-hidden="true"></i>
{user.firstname}</Link>
            </li>
            <li onClick={logout}>
  <Link to="">Logout</Link>
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
                <Link to="/cart" className="cart"><i className="fa fa-cart-arrow-down" aria-hidden="true"></i>
               {cart.length >0 ?<span className='badge badge-warning' id='lblCartCount'> {cart.length} </span> : ""}
</Link>
              </li>
              <li>
                <Link to="/login">Log In</Link>
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
