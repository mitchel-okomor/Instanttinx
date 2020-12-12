import React, {useEffect, useState, useContext} from 'react';
import './event-details.css';
import {Link} from 'react-router-dom';
import {SERVER_URL, SET_LOADING, SET_CART} from '../helpers/constant';
import {myContext} from '../../App';
import axios from 'axios';
import Loading from '../loading/Loading';



function Eventdetails(props) {
    let  id  = props.match.params.id;
    console.log(id)
    // const dispatch = useDispatch();
    const {state, dispatch}=useContext(myContext);
    const { loading, cart, user, userEvents} = state;
    const [event, setEvent] = useState("");
    const [quantity, setQuantity] = useState("")

  useEffect(() => {
      if(!user.firstname){
         fetchEvent();
      }
      else{
          getEventFromState();
      }
     
  }, [])

//fetch user info when app starts
const fetchEvent = async () => {

    const url = SERVER_URL + "/api/event/" +id;
    dispatch({type:SET_LOADING, payload:true})
    try {
      const response = await axios.get(url);
      if (response.status === 200) {
        const data = response.data;
      setEvent(data)
      dispatch({type:SET_LOADING, payload:false})
      }
    } catch (error) {
        dispatch({type:SET_LOADING, payload:false})
      console.log(error);
    }
  };

 const getEventFromState = ()=>{
const event = userEvents.find(item => item._id === id)
setEvent(event);
 } 

 const addToCart = (event, quantity) =>{

    const ticket = {event, quantity};
    const cart = cart.push(ticket);

dispatch({type:SET_CART, payload:cart})
 }

 const handleChange = (e) =>{
setQuantity(e.target.value);
 }

  if(loading){
   return  <div className="event-details mt-5">
 <Loading />
      </div>
      
  }

    return (
        <div className="container mt-5 event-details">
        <div className=" ">
            <div className="row bg-light py-4">
                <div className="col-lg-8 col-12">
<img src={`${SERVER_URL}/${event.image}`} />
                </div>
                <div className="col-lg-4 col-12">
    <h3>{event.date}</h3>
    <p>{event.title}</p>
    <p>{event.planner? event.planner : ""} <span><Link to={event.social? event.social : ""}>Follow</Link></span></p>
    <h4>Amount: {event.price? event.price: "Free event"}</h4>
                </div>

            </div>

            <div className="row bg-light py-4">
            <div className="col-lg-8 col-12">
</div>
<div className="col-lg-4 col-12 border-bottom-0">
    <button className="add-to-cart" onClick={()=>{addToCart(event, quantity)}}>Add to cart</button> <span>
        <label>Number of Tickets</label> 
        <input type="number" onChange={handleChange}/></span>
</div>
            </div>

    <div className="mt-5 ">
        <h4 className="mt-4">About this event</h4>
    <p className="mt-4">{event.description}</p>
    </div>
          
        </div>
        </div>
    )
}

export default Eventdetails;
