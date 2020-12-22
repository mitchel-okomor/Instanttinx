import React, {useContext} from "react";
import "./home.css";
import history from "../services/history";
import {myContext} from '../../App';
import {Link} from "react-router-dom";
import { SERVER_URL} from "../helpers/constant";



const Home = () => {


const {state}=useContext(myContext);
const {user, ticketEvents} = state;

function getAnimation (){
  const animationList = ["zoom-in-right", "zoom-in-left", "slide-up", "slide-down", "flip-right","fade-up-right", "fade-down-left", "zoom-out"]

  const animation = animationList[Math.floor(Math.random()*8)]

return animation;
}

if(user.role === "planner"){
  history.push("/admin/dashboard");
}


  return (
    <main>
      <div className="home">
        <div className="container-fluid text-center intro">
          
          <div className=" row mb-5 p-5 pb-5 ">
            <div className="col-sm-6 col-lg-6 col-xl-6 col-xs-12" data-aos="fade-up">
              <div className="m-5 p-5 ">
          <h1 className =" mb-4" data-aos="slide-right">Looking for your nearest event?</h1> 
          <div className="mt-5  see-more-button">
            <Link to="/events" className="btn btn-success">See Events</Link>
          </div>
              </div>
            </div>
              <div className="col-sm-6 col-lg-6 col-xl-6 col-xs-12" data-aos="fade-left">
                <div className="intro-image p-5">
                  <img src={require("../../images/party.jpg")} />
                </div>
              </div>
           
          </div>
 </div>
      {/**Curent events */}
      <div className="current-events mt-5 p-5 bg-light">
        <h2 className=" mb-5">Featured events</h2>
<div className="row">
{
  ticketEvents.map((event)=>{
    return(
      <div className="col-sm-4 col-lg-4 col-xl-4 col-xs-12 " data-aos={getAnimation()}>
            <Link to={`/event/${event._id}`}>
      <div class="card " >
  <img class="card-img-top" src={`${SERVER_URL}/${event.image}`} alt="Event image" />
  <div class="card-body">
    <h5 class="card-title text-success font-weight-bold">{event.title}</h5>
    <p class="card-text"><span>Venue: {event.venue}</span><span>Date: {event.date}</span>  <span>Time: {event.time}</span> <span></span></p>
    <Link to={`/event/${event._id}`} class="btn btn-success">View details</Link>
  </div>
</div></Link>
</div>
    )
  })
}
            
        
             
</div>
</div>

      {/**Previous events */}
<div className="container upcoming-events mt-5 mb-5">
      <h2 className="mb-5">Upcoming Events</h2>
      <div className="row">
    {  ticketEvents.map((event)=>{
    let dateInsec = Date.parse(event.date);
    let date = new Date(dateInsec);
    let month = ["JAN", "FEB", "MAR", "APR", "MAP", "JUN", "JUL", "AUG", "SEPT", "OCT", "NOV", "DEC"];
  return  <div className="col-sm-4 col-lg-4 col-xl-4 col-xs-12">
              <div className="mr-5">
              <div className="card">
              <img className="card-image" src={`${SERVER_URL}/${event.image}`} alt="Event Image"/>
              <div className="row card-body">
             <div className="col-8 title "><h5 className=" float-left">{event.title}</h5> </div>  
              <div className="col-4 "><div className="date">{month[date.getMonth()] + " " + date.getDay()}</div></div>
              </div>
              </div>
              </div>
            </div> })}
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
