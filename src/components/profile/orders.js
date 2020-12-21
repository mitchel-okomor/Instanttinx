import React, {useEffect, useContext} from 'react';
import './orders.css';
import {myContext} from '../../App';
import Loading from '../loading/Loading';
import axios from 'axios';
import { SERVER_URL, SET_LOADING, SET_USER_EVENTS, SET_USER_ORDERS } from "../helpers/constant";
import { Link } from 'react-router-dom';




function Orders() {

    const {state, dispatch} = useContext(myContext);
    const {loading, orders, ticketEvents} = state;


    useEffect(()=>{
fetchOrders();
    }, []);

   const fetchOrders = async () =>{
    const url = SERVER_URL + "/api/orders";
    dispatch({type:SET_LOADING, payload:true})
    try {
      const response = await axios.get(url,{
            method: "put",
            headers: {
              "Authorization": localStorage.getItem('token')
          }
          });
      if (response.status === 200) {
        const data = response.data;
      dispatch({type:SET_USER_ORDERS, payload: data})
      dispatch({type:SET_LOADING, payload:false})
      }
    } catch (error) {
        dispatch({type:SET_LOADING, payload:false})
      console.log(error);
    }   }


    console.log("orders: "+ orders);
    if(orders || orders.length > 0){
       
return(
    <table className="table table-bordered order">
  <thead>
    <tr>
      <th scope="col">Event Title</th>
      <th scope="col">Number of Tickets</th>
      <th scope="col">Payment Status</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
  {
      
      orders.map((item)=>{
        const event = ticketEvents.find(event => event._id === item.eventId);
return(
    <tr key={item._id}>
    <td>{event.title}</td>
    <td>{item.quantity}</td>
    <td className="font-weight-bold">{item.isPaid === true? "paid" : "pending"}</td>
    <td>{item.isPaid === true? "" :<button>Pay</button>}</td>
    </tr>
)
    })
    }
  </tbody>
</table>
)
    }
    

    return (
        <div className="row order">
        <div className="col-6 col-sm-12">
            <div>
        No order has been made yet.
        </div>
        </div>

        <div className="col-6 col-sm-12">
        <div>
           <Link className="btn btn-primary">Goto Events</Link>
 
        </div>
        </div>
            
        </div>
    )
}

export default Orders;
