import React from 'react';
import './checkout.css';
import withAuth from '../services/withAuth';

function Checkout() {
    return (
        <div>
            checkout
        </div>
    )
}

export default  withAuth(Checkout);
