import React from 'react';

const Order = (props) => {
    // console.log(props.counts)
    const order = props.count;
    console.log(order);
    const total = order.reduce((total, item) => total + item.price, 0);
    return (
        <div>
            <h5>Items Order: {order.length}</h5>
            <p>Total Price: ${total}</p>
        </div>
    );
};

export default Order;