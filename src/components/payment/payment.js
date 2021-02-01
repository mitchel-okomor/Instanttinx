import React, { useEffect, useState, useContext } from "react";
import "./payment.css";
import { Link, Redirect } from "react-router-dom";
import { SERVER_URL, SET_LOADING } from "../helpers/constant";
import { myContext } from "../../App";
import axios from "axios";

function Payment({ match }) {
  const [details, setdetails] = useState("hide");
  const [transaction, setTransaction] = useState(null);
  const { state } = useContext(myContext);
  const { user, orders } = state;

  const current_order = orders.find((order) => (order.id = match.params.id));
  //show or hide bank details
  const toggle_bank_details = () => {
    if (details === "hide") {
      setdetails("");
    } else setdetails("hide");
  };

  //initialize transaction to get a reference
  const pay = () => {
    console.log(user);
    const form = {
      amount: current_order.amount * 100,
      full_name: user.firstname + " " + user.lastname,
      email: user.email,
    };
    const url = SERVER_URL + "/api/pay";
    axios
      .post(url, form)
      .then((res) => {
        console.log(res);
        setTransaction({ transaction: res.data, amount: current_order.amount });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return transaction ? (
    <Redirect to={{ pathname: "/pay", state: transaction }} />
  ) : (
    <div className="payment container mt-4">
      <div className="card">
        <div className="card-header text-center">PAY WITH</div>
        <div className="card-body">
          <div className="border p-3" onClick={pay}>
            <i class="fa fa-credit-card" aria-hidden="true"></i>
            <button className="btn">Card</button>
            <i
              class="fa fa-long-arrow-right float-right"
              aria-hidden="true"
            ></i>
          </div>

          <div className="border p-3">
            <i class="fa fa-university " aria-hidden="true "></i>
            <button className="btn" onClick={toggle_bank_details}>
              Bank Transfer
            </button>
            <i
              class="fa fa-long-arrow-right float-right"
              aria-hidden="true"
            ></i>
          </div>
          <div className={`bank-details ${details} p-3`}>
            <p>Account Name: InstanTinx</p>
            <p>Account Number: 00048478</p>
            <p>Bank: Dev Bank</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
