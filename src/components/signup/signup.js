import React, {useState, useReducer} from "react";
import {Link} from 'react-router-dom';
import './signup.css';
import axios from 'axios';
import {SERVER_URL} from '../helpers/constant';



const initialState = {
  firstname: "",
lastname: "",
username: "",
email: "",
phone: "",
password: "",
confirm:"",
loading: false,
message: "",
serverMessage: ""
};

//setup reducer user input (avoid too much useState hoks)
const reducer = (state, { field, value }) => {
return { ...state, [field]: value  };
};

const Signup = () => {
  
//use reducer hook to dispatch change action
const [state, dispatch] = useReducer(reducer, initialState);

//form input change
const handleChange = (e) => {
dispatch({ field: e.target.name, value: e.target.value });
};


const handleSubmit = async (e)=>{
  e.preventDefault();
  const{password, confirm, message} = state;
  if(password !== confirm){
    console.log("not match")
    dispatch({field:"message", value:"Password do not match!"})
    return;
  }


  const url = SERVER_URL+'/signup';
  console.log(state);
  dispatch({field:"loading", value:true}); 
  try{
  const response = await axios.post(url, state, {
    timeout: 30000
  });
  if(response.status==200){
    const data = response.data.data;
   console.log(data);
   localStorage.setItem("userId", data.userId);
dispatch({field:"loading", value:false}); 
dispatch({field:"serverMessage", value:response.data.message}); 

  }
}
  catch(error){
    console.log(error);
    dispatch({field:"loading", value:false}); 
  }
}

const {message} = state;
  return (
    <div className="container-fluid mt-5  pt-5 signup ">
      <div className="row d-flex justify-content-center ">
        <form onSubmit={handleSubmit} className="bg-white form-group shadow mb-5">
          <div className="pt-5 pb-5">
            <h1 className="text-center">Sign Up</h1>

            <div className="from-group mt-4 ml-4  mb-2">
              {" "}
              <label for="fname">
                First name <span className="danger">*</span>
              </label>{" "}
              <br />
              <div className="input-group ">
                <div className="input-group-prepend">
                  <div className="input-group-text bg-white">
                    <i className="fa fa-user-o" aria-hidden="true"></i>
                  </div>
                </div>
                <input
                  type="text"
                  className="form-control"
                  id="firstname"
                  name="firstname"
                  placeholder="First name"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="from-group mt-4 ml-4  mb-2">
              {" "}
              <label for="fname">
                Last name <span className="danger">*</span>
              </label>{" "}
              <br />
              <div className="input-group ">
                <div className="input-group-prepend">
                  <div className="input-group-text bg-white">
                    <i className="fa fa-user-o" aria-hidden="true"></i>
                  </div>
                </div>
                <input
                  type="text"
                  className="form-control"
                  id="lastname"
                  name="lastname"
                  placeholder="Last name"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="from-group mt-4 ml-4  mb-2">
              {" "}
              <label for="username">
                Username <span className="danger">*</span>
              </label>{" "}
              <br />
              <div className="input-group ">
                <div className="input-group-prepend">
                  <div className="input-group-text bg-white">
                    <i className="fa fa-user-o" aria-hidden="true"></i>
                  </div>
                </div>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  placeholder="Username"
                  name="username"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="from-group mt-4 ml-4 mb-2">
              {" "}
              <label for="email">
                Email <span className="danger">*</span>
              </label>{" "}
              <br />
              <div className="input-group ">
                <div className="input-group-prepend">
                  <div className="input-group-text bg-white">
                    <i className="fa fa-envelope-o" aria-hidden="true"></i>
                  </div>
                </div>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="email"
                  name="email"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="from-group mt-4 ml-4 mb-2">
              {" "}
              <label for="phone">
                Phone number <span className="danger">*</span>
              </label>{" "}
              <br />
              <div className="input-group ">
                <div className="input-group-prepend">
                  <div className="input-group-text bg-white">
                  <i className="fa fa-phone" aria-hidden="true"></i>
                  </div>
                </div>
                <input
                  type="number"
                  className="form-control"
                  id="phone"
                  placeholder="2348047384940"
                  name="phone"
                  maxLength="13"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="from-group mt-4 ml-4  mb-2">
              {" "}
              <label for="password">
                Password <span className="danger">*</span>
              </label>{" "}
              <br />
              <div className="input-group ">
                <div className="input-group-prepend">
                  <div className="input-group-text bg-white">
                    <i className="fa fa-key" aria-hidden="true"></i>
                  </div>
                </div>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                  name="password"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="from-group mt-4 ml-4  mb-2">
            <div className="text-danger ml-3 message">{message}</div>
              <label for="password">
                Confirm Password <span className="danger">*</span>
              </label>{" "}
              <br />
              <div className="input-group ">
                <div className="input-group-prepend">
                  <div className="input-group-text bg-white">
                    <i className="fa fa-key" aria-hidden="true"></i>
                  </div>
                </div>
                <input
                  type="password"
                  className="form-control"
                  id="confirm"
                  placeholder="Confirm Password"
                  name="confirm"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>


          </div>
          <div className="input-group ml-4 mr-4 mb-2">
            <button type="submit">Signup</button>
          </div>

          <div className="mt-5 d-flex justify-content-center align-items-center login ">
            <p>
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </div>
      </form>
      </div>
    </div>
    
  );
}

export default Signup;
