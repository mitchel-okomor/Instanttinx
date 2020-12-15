import React, {useContext} from "react";
import "./home.css";
import history from "../services/history";
import {myContext} from '../../App';
import {Link} from "react-router-dom";
import { SERVER_URL} from "../helpers/constant";



const Home = () => {


// const dispatch = useDispatch();
const {state}=useContext(myContext);
const {user, ticketEvents} = state;



if(user.role === "planner"){
  history.push("/admin/dashboard");
}


  return (
    <main>
      <div className="home">
        <div className="container">
          <div className="top-images mt-5">
          <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item" >
  <img src="..." alt="..." />
  <div class="carousel-caption d-none d-md-block" >
    <h5>...</h5>
    <p>...</p>
  </div>
</div>
    <div class="carousel-item">
  <img src="..." alt="..." />
  <div class="carousel-caption d-none d-md-block">
    <h5>...</h5>
    <p>...</p>
  </div>
</div>
<div class="carousel-item">
  <img src="..." alt="..." />
  <div class="carousel-caption d-none d-md-block">
    <h5>...</h5>
    <p>...</p>
  </div>
</div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
          </div>
          <div className=" row mt-5 mb-3 pt-5 pb-5 intro">
            <div className="col-sm-6 col-lg-6 col-xl-6 col-xs-12">
              <div className="mr-5 ">
          <h1>Looking for your nearest events?</h1> 
           <Link className="btn btn">See Events</Link>
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
      <div className="current-events mt-5 p-5 bg-light">
        <h3 className=" mb-5">Our next events</h3>
<div className="row">
{
  ticketEvents.map((event)=>{
    return(
      <div className="col-sm-4 col-lg-4 col-xl-4 col-xs-12">
      <div class="card" >
  <img class="card-img-top" src={`${SERVER_URL}/${event.image}`} alt="Card image cap" />
  <div class="card-body">
    <h5 class="card-title">{event.title}</h5>
    <p class="card-text"><span>Venue: {event.venue}</span><span>Date: {event.date}</span>  <span>Time: {event.time}</span> <span></span></p>
    <Link to={`/event/${event._id}`} class="btn btn-primary">Get Tickets</Link>
  </div>
</div>
</div>
    )
  })
}
            
        
             
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
