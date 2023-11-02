import "./SingleCustomerOrder.css"
import React, { useState } from 'react';
import axiosInstance from "../../utilities/axiosInstance"

const SingleCustomerOrder = ({ order }) => {
    const { line_items, name, email, phone, city, postal, street, country, shipping, paid, status, createdAt, updatedAt } = order

    const [shippingStatus, setShippingStatus] = useState(status)

    const [showDetails, setShowDetails] = useState(false)

    const changeShippingStatus = (e) => {
        const confirm = window.confirm("Are you sure about the new changed Status ?!")
        if (confirm) {
            setShippingStatus(e.target.value)
            axiosInstance.post("update-order-status", { orderId: order._id, status: e.target.value })
        }
    }


    let total = 0;
    for (const item of line_items) {
        total += item?.price_data?.product_data?.metadata?.totalPaid
    }

    // when shipping price present, creates the problem

    return (
        <div className="single-order">
            <div className="order-summary">
                <div>
                    <p>Total amount : <span className="bold">${total}</span></p>
                    <p>Order Id : <span className="bold">{order._id}</span> </p>
                </div>

                <div>
                    <p>Payment date: <span className="bold">{(new Date(createdAt)).toLocaleString()}</span></p>
                    <p>Last updated: <span className="bold">{(new Date(updatedAt)).toLocaleString()}</span></p>
                </div>

                <div>
                    <p>Shipping method : <span className="bold" style={{ textTransform: "uppercase" }}>{shipping}</span></p>
                    <p>Shipping status : {paid ?

                        <span className="bold" style={{color: "green"}}>{shippingStatus}</span>

                        : <span className="bold" style={{ color: "red" }}>{status}</span>}

                    </p>

                </div>


                <button onClick={() => setShowDetails(prev => !prev)}>{showDetails ? "Hide details" : "Show details"} </button>
            </div>

            <div className="order-details" style={showDetails ? {} : { gridTemplateRows: "0fr", marginTop: "0", padding: "0" }}>
                <div>
                    <h5 className="title">Product Details</h5>

                    <p>Order Id : <span className="bold">{order._id}</span> </p>

                    {line_items.map((item, ind) => {
                        const product_data = item.price_data.product_data


                        return (
                            <div className='singleCheckout' key={ind}>
                                <div className='product-details'>
                                    {product_data.images && <img src={product_data?.images[0]} alt='product image'></img>}

                                    <div>
                                        <h3>{product_data?.name}</h3>
                                        <small>{product_data?.description}</small>
                                    </div>
                                </div>

                                <div>
                                    <p className='unit bold'>x{product_data?.metadata?.quantity}</p>
                                    <p className='price'>paid: $ {product_data?.metadata?.totalPaid}</p>
                                </div>
                            </div>
                        )
                    })}



                </div>

                <div className="shipping-info">
                    <h5 className="title">Shipping information</h5>
                    <p>Name : <span className="bold">{name}</span></p>
                    <p>Email address : <span className="bold">{email}</span></p>
                    <p>Phone number : <span className="bold">{name}</span></p>
                    <p>City : <span className="bold">{name}</span></p>
                    <p>Street : <span className="bold">{street}</span></p>
                    <p>Postal code : <span className="bold">{postal}</span></p>
                    <p>Country : <span className="bold">{country}</span></p>
                </div>
            </div>
        </div>
    );
};

export default SingleCustomerOrder;