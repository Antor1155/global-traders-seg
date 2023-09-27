import "./SingleAdminOrder.css"
import React from 'react';

const SingleAdminOrder = ({ order }) => {
    const {line_items, name, email, phone, city, postal, street, country, shipping, paid, status,createdAt} = order

    
    let total = 0;
    for (const item of line_items) {
        total += item?.price_data?.product_data?.metadata?.totalPaid
    }

    // when shipping price present, creates the problem

    console.log(order)
    return (
        <div className="single-order">
            <div className="order-summary">
                <div>
                    <p>Total amount : <span className="bold">${total}</span></p>
                    <p>Payment : {paid ? <span className="bold" style={{color:"green"}}>Completed </span> :
                        <span className="bold" style={{color:"red"}}>Failed </span>}
                    </p>
                </div>

                <div>
                    <p>Customer email: <span className="bold">{email}</span></p>
                    <p>Payment date: <span className="bold">{createdAt.substring(0, 10)}</span></p>
                </div>

                <div>
                    <p>Shipping status : <span className="bold">{status}</span></p>
                </div>
            </div>
        </div>
    );
};

export default SingleAdminOrder;