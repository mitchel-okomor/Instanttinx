import React, {useContext} from 'react';
import {myContext} from '../../App';
import axios from 'axios';
import {SERVER_URL, SET_LOADING, SET_USER_EVENTS, SET_CART} from '../helpers/constant';
import Loading from "../loading/Loading";
import './checkout.css';
import withAuth from '../services/withAuth';
import {Link} from 'react-router-dom';

function Checkout() {
  const {state, dispatch}=useContext(myContext);
  const { cart, user} = state;
  const firstname = user.firstname? user.firstname.toUpperCase() : '';
  const lastname = user.lastname? user.lastname.toUpperCase() : '';
  const userName = firstname + " " + lastname;
  let initialVal =0;
async function placeOrder(){

  const body = {
   userId: user._id,
   cart
  }
  const url = SERVER_URL + "/api/ticket";
  dispatch({ type: SET_LOADING, payload: true });
  try {
    const response = await axios.post(url, body,{
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

 
const removeitem = (id) => {
  const index = cart.findIndex(item=>item.eventId === id);
cart.splice(index,1);
localStorage.setItem('cart', JSON.stringify(cart) );
dispatch({type:SET_CART, payload:cart})
}


  
    return (
        <div className = "checkout container mt-5">
               <table class="table table-bordered">
  <thead className="bg-light p-5">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Ticket</th>
      <th scope="col">Price</th>
      <th scope="col">Quantity</th>
      <th scope="col">Total</th>
      <th scope="col">Action</th>
    </tr> 
  </thead>
  <tbody className="p-5">
{cart.map(({title, quantity, price, total, eventId}, index)=>{
  const localQuantitty = quantity;
return  <tr key={index}>
      <td scope="row">{index+1}</td>
<td>{title}</td>
<td>{price}</td>
<td ><div className="quantity-button"><button>–</button> {localQuantitty} <button>+</button></div></td>
<td>₦{total}</td>
<td ><Link className="text-danger font-weight-bold" onClick={()=>{removeitem(eventId)}}><i class="fa fa-times" aria-hidden="true"></i>
</Link></td>
    </tr>
})}
<tr scope="row" className="">

<td colspan="6"> <button>Update cart</button>
</td>
</tr>
  </tbody>
</table>

<div className="mt-5">
<h2>Buyer's Details</h2>
<div>
  <label>Name <span className="text-danger">*</span></label> <br />
  <input type="text" className="form-control" value={userName} />
</div>
<div>
  <label>Phone <span className="text-danger">*</span></label> <br />
  <input type="text" className="form-control" value={user.phone}/>
</div>
<div>
  <label>Email Address <span className="text-danger">*</span></label> <br />
  <input type="text" className="form-control" value={user.email}/>
</div>
<div>

<div className="mt-5">
  <h2>Your Order</h2>
<table className="table table-bordered">
  <thead>
    <tr>
      <th scope="col">Product</th>
      <th scope="col">Total</th>
    </tr>
  </thead>
  <tbody>
  {cart.map(({title, quantity, price, total}, index)=>{
   return <tr key={index}>
      <td>{title + " " + " X "+ " " + quantity}</td>
      <td>{total}</td>
    </tr>}
  )
}
<td className="font-weight-bold">Grand Total</td>
<td>{cart.reduce((acc, item)=>{
  return acc + item.total;
}, initialVal)}</td>
  </tbody>
</table>
</div>

</div>
</div>
<div className="text-center mt-5"><button onClick={placeOrder}>Place order</button></div>

        </div>
    )
}

export default  withAuth(Checkout);
