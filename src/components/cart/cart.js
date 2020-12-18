import React, {useContext} from 'react';
import {myContext} from '../../App';
import {SET_CART} from '../helpers/constant';
import './cart.css';
import {Link} from 'react-router-dom';


function Cart() {
    const {state, dispatch}=useContext(myContext);
  const { cart, } = state;
 

 
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


<div className="text-center mt-5"><Link className="btn btn-primary" to="/checkout">Proceed to checkout</Link></div>

        </div>)
}

export default Cart;
