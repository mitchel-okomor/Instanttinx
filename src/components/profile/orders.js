import React, { useEffect, useCallback, useContext } from "react";
import "./orders.css";
import { myContext } from "../../App";
import axios from "axios";
import { SERVER_URL, SET_LOADING, SET_USER_ORDERS } from "../helpers/constant";
import { Link } from "react-router-dom";

function Orders() {
  const { state, dispatch } = useContext(myContext);
  const { orders } = state;

  const fetchOrders = useCallback(async () => {
    const url = SERVER_URL + "/api/orders";
    dispatch({ type: SET_LOADING, payload: true });
    try {
      const response = await axios.get(url, {
        method: "put",
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      if (response.status === 200) {
        const data = response.data;
        console.log(data);
        dispatch({ type: SET_USER_ORDERS, payload: data });
        dispatch({ type: SET_LOADING, payload: false });
      }
    } catch (error) {
      dispatch({ type: SET_LOADING, payload: false });
      console.log(error);
    }
  }, [dispatch]);

  useEffect(() => {
    fetchOrders();
  }, [fetchOrders]);

  if (orders || orders.length > 0) {
    return (
      <table className="table text-center table-bordered order">
        <thead>
          <tr>
            <th scope="col">Order Id</th>
            <th scope="col">Tickets</th>
            <th scope="col">Payment Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((item) => {
            //const event = item.cart.map((event) => event._id === item.eventId);
            return (
              <tr key={item._id}>
                <td>{item.orderId}</td>
                <td>
                  <ul>
                    {item.cart.map((ticket) => (
                      <li key={ticket.eventId}>
                        <Link to={""}>{ticket.eventId}</Link>
                      </li>
                    ))}
                  </ul>
                </td>

                <td className="font-weight-bold">
                  {item.isPaid ? "Paid" : "pending"}
                </td>
                <td>
                  {item.isPaid ? (
                    <Link to="" className="btn btn-success">
                      View Payment
                    </Link>
                  ) : (
                    <Link
                      to={`/payment/${item._id}`}
                      className="btn btn-primary"
                    >
                      Pay
                    </Link>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }

  return (
    <div className="row order">
      <div className="col-6 col-sm-12">
        <div>No order has been made yet.</div>
      </div>

      <div className="col-6 col-sm-12">
        <div>
          <Link className="btn btn-primary">Goto Events</Link>
        </div>
      </div>
    </div>
  );
}

export default Orders;
