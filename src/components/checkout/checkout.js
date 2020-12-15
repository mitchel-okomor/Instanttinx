import React, {useContext} from 'react';
import {myContext} from '../../App';
import axios from 'axios';
import {SERVER_URL, SET_LOADING, SET_USER_EVENTS} from '../helpers/constant';
import Loading from "../loading/Loading";
import './checkout.css';
import withAuth from '../services/withAuth';

function Checkout() {
  const {state, dispatch}=useContext(myContext);
  const { cart} = state;

async function placeOrder(){

  const url = SERVER_URL + "/api/ticket";
  dispatch({ type: SET_LOADING, payload: true });
  try {
    const response = await axios.patch(url, cart,{
      headers: {
        "Authorization": localStorage.getItem('token')
    }});
    if (response.status === 200) {
      const data =response.data;
    
      dispatch({ type: SET_LOADING, payload: false });
      dispatch({type:SET_USER_EVENTS, payload: data })
     // history.push("/profile/order");
    }
  } catch (error) {
    console.log(error);
    dispatch({ type: SET_LOADING, payload: false });
  }
};

 



  
    return (
        <div className = "checkout container mt-5">
               <table class="table table-borderless">
  <thead className="bg-light p-5">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Ticket</th>
      <th scope="col">Price</th>
      <th scope="col">Quantity</th>
      <th scope="col">Total</th>
    </tr> 
  </thead>
  <tbody className="p-5">
{cart.map(({title, quantity, price, total}, index)=>{
return  <tr key={index}>
      <th scope="row">{index+1}</th>
<td>{title}</td>
<td>{price}</td>
<td>{quantity}</td>
<td>₦{total}</td>
    </tr>
})}
    
  </tbody>
</table>

<div className="text-center mt-5"><button onClick={placeOrder}>Place order</button></div>

        </div>
    )
}

export default  withAuth(Checkout);
