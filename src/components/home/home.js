import React, {useContext} from "react";
import "./home.css";
import history from "../services/history";
import {myContext} from '../../App';


const Home = () => {

// const dispatch = useDispatch();
const {state}=useContext(myContext);
const {user} = state;
if(user.role === "planner"){
  history.push("/admin/dashboard");
}
  return (
    <main>
      <div className="home">
        <div className="container">
          <div className=" row mt-5 mb-3 pt-5 pb-5 intro">
            <div className="col-sm-6 col-lg-6 col-xl-6 col-xs-12">
              <div className="mr-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </div>
            </div>
              <div className="col-sm-6 col-lg-6 col-xl-6 col-xs-12">
                <div className="intro-image">
                  <img src={require("../../images/party.jpg")} />
                </div>
              </div>
           
          </div>
        </div>
      {/**Curent events */}
      <div className="current-events mt-5 p-5">
        <h3 className="mb-3">Current Events</h3>
<div className="row">
<div className="col-sm-4 col-lg-4 col-xl-4 col-xs-12">
              <div className="mr-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </div>
            </div>
            <div className="col-sm-4 col-lg-4 col-xl-4 col-xs-12">
              <div className="mr-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </div>
            </div>
            <div className="col-sm-4 col-lg-4 col-xl-4 col-xs-12">
              <div className="mr-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </div>
            </div>     
</div>
</div>

      {/**Previous events */}
      <div className="container previous-events mt-5 mb-5">
        <h3 className="mb-3">Previous Events</h3>
<div className="row">
<div className="col-sm-4 col-lg-4 col-xl-4 col-xs-12">
              <div className="mr-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </div>
            </div>
            <div className="col-sm-4 col-lg-4 col-xl-4 col-xs-12">
              <div className="mr-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </div>
            </div>
            <div className="col-sm-4 col-lg-4 col-xl-4 col-xs-12">
              <div className="mr-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </div>
            </div>     
</div>
</div>

<div className="container">
<div className=" row mt-5 mb-5 info">
            <div className="col-sm-6 col-lg-6 col-xl-6 col-xs-12">
              <div className="mr-5">
              <h4 className="text-center mb-2"> Total Events completed</h4> 
              <h3 className="text-center">54</h3>
              </div>
            </div>
              <div className="col-sm-6 col-lg-6 col-xl-6 col-xs-12">
              <h4 className="text-center mb-2">Feedback</h4>

              </div>
           
          </div>
          </div>
      </div>
    </main>
  );
};

export default Home;
