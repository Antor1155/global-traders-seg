import "./SingleAdminOrder.css"
import React from 'react';

const SingleAdminOrder = ({ order }) => {
    const { line_items, name, email, phone, city, postal, street, country, shipping, paid, status, createdAt } = order


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
                    <p>Payment : {paid ? <span className="bold" style={{ color: "green" }}>Completed </span> :
                        <span className="bold" style={{ color: "red" }}>Failed </span>}
                    </p>
                </div>

                <div>
                    <p>Customer email: <span className="bold">{email}</span></p>
                    <p>Payment date: <span className="bold">{createdAt.substring(0, 10)}</span></p>
                </div>

                <div>
                    <p>Shipping method : <span className="bold" style={{ textTransform: "uppercase" }}>{shipping}</span></p>
                    <p>Shipping status : <span className="bold">{status}</span></p>
                </div>

                <button> Show details</button>
            </div>

            <div className="order-details">
                <div>
                    <h5 className="title">Product Details</h5>

                    {line_items.map((item, ind) => {
                        const product_data = item.price_data.product_data
                        console.log(product_data)


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

export default SingleAdminOrder;