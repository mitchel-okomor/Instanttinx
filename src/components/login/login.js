import React, { useReducer } from "react";
import {Link} from 'react-router-dom';
import "./login.css";
import history from "../services/history";
import checkLogin from "../helpers/checkLoggin";
import Loading from "../loading/Loading";
import axios from "axios";
import { SERVER_URL } from "../helpers/constant";

const initialState = {
  email: "",
  password: "",
  loading: false,
  message: "",
  serverMessage: "",
};

//setup reducer user input (avoid too much useState hoks)
const reducer = (state, { field, value }) => {
  return { ...state, [field]: value };
};

const Login = () => {
  //use reducer hook to dispatch change action
  const [state, dispatch] = useReducer(reducer, initialState);

  //form input change
  const handleChange = (e) => {
    dispatch({ field: e.target.name, value: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = SERVER_URL + "/login";
    console.log(state);
    dispatch({ field: "loading", value: true });
    try {
      const response = await axios.post(url, state, {
        timeout: 30000,
      });
      if (response.status == 200) {
        const data = response.data.info.data;
        console.log(data);
        localStorage.setItem("userId", data.userId);
        localStorage.setItem("token", response.data.info.token);
        dispatch({ field: "loading", value: false });
        dispatch({ field: "serverMessage", value: response.data.message });
      }
    } catch (error) {
      console.log(error);
      dispatch({ field: "loading", value: false });
    }
  };

  const { message } = state;

  return (
    <div className="login">
      <div class="container-fluid mt-5  pt-5 login ">
        <div class="row d-flex justify-content-center ">
          <form onSubmit={handleSubmit} class="bg-white form-group shadow mb-5">
            <div class="py-5">
              <h1 class="text-center">Sign In</h1>
              <div class="input-group mt-4 ml-4 mr-4 mb-2">
                <div class="input-group-prepend">
                  <div class="input-group-text bg-white">
                    <i class="fa fa-envelope-o" aria-hidden="true"></i>
                  </div>
                </div>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="Username or email"
                  name="email"
                  required
                  onChange={handleChange}
                />
              </div>
              <div class="input-group mt-5 ml-4 mr-4 mb-2">
                <div class="input-group-prepend">
                  <div class="input-group-text bg-white">
                    <i class="fa fa-key" aria-hidden="true"></i>
                  </div>
                </div>
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  placeholder="Password"
                  name="password"
                  required
                  onChange={handleChange}
                />
              </div>
              <div class="input-group mt-5 ml-4 mr-4 mb-2">
                <button type="submit">Login</button>
              </div>

              <div class="mt-5 d-flex justify-content-center align-items-center signup ">
                <p>
                 New to Instant Tinx? <Link to="/signup">Sign Up Here</Link>
                </p>
              </div>
              <div class="mt-5 text-right mr-5">
                <Link to="./forgotpassword.html">Forgot password?</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
