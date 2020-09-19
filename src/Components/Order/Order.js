import React from 'react';
import './Order.css';
const Order = (props) => {
    const order = props.count;
    const total = order.reduce((total, item) => total + item.price, 0);
    const grandTotal = total.toFixed(2);
    return (
        <div className="order-container">
            <h5>Items Order: {order.length}</h5>
            <p>Total Price: ${grandTotal}</p>
        </div>
    );
};

export default Order;