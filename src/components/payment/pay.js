import React, { useContext } from "react";
import { PaystackConsumer } from "react-paystack";
import "./pay.css";
import { myContext } from "../../App";
import history from "../services/history";

// you can call this function anything
const handleSuccess = (reference) => {
  // Implementation for whatever you want to do with reference and after success call.
  console.log(reference);
};

// you can call this function anything
const handleClose = () => {
  // implementation for  whatever you want to do when the Paystack dialog closed.
  history.push("/profile");
};

function Pay({ location }) {
  const { state } = useContext(myContext);
  const { user } = state;
  const config = {
    reference: location.state.transaction.reference,
    email: user.email,
    amount: location.state.amount * 100,
    publicKey: "pk_test_6218646e813546a27bc96b74c7ed71166de79471",
  };

  const componentProps = {
    ...config,
    text: "Paystack Button Implementation",
    onSuccess: (reference) => handleSuccess(reference),
    onClose: handleClose,
  };

  return (
    <div className="pay">
      <div className="card text-center">
        <div className="card-header ">
          <i class="fa fa-credit-card mr-2" aria-hidden="true"></i>
          Card Payment
        </div>
        <div className="card-body">
          <PaystackConsumer {...componentProps}>
            {({ initializePayment }) => (
              <button
                className="btn btn-success"
                onClick={() => initializePayment(handleSuccess, handleClose)}
              >
                Pay with Paystack
              </button>
            )}
          </PaystackConsumer>
        </div>
      </div>
    </div>
  );
}

export default Pay;
