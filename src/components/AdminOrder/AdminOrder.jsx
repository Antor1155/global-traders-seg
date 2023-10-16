import axiosInstance from "../../utilities/axiosInstance";
import "./AdminOrder.css"

import React, { useEffect, useState } from 'react';
import SingleAdminOrder from "./SingleAdminOrder";

const AdminOrder = () => {
    const [orders, setOrders] = useState([])
    const [orderStatus, setOrderStatus] = useState("Processing")

    useEffect(() => {
        axiosInstance.get(`admin-orders/${orderStatus}`)
            .then(res => setOrders(res.data))
            .catch(error => console.log(error))
    }, [orderStatus])


    return (
        <main className="admin-order">
            <div className="statusButtons">
                <button className={orderStatus==="Processing" ? "active" : {}} onClick={()=>setOrderStatus("Processing")}>Paid</button>

                <button className={orderStatus==="Shipped" ? "active" : {}} onClick={()=>setOrderStatus("Shipped")}>Shipped</button>

                <button className={orderStatus==="Delivered" ? "active" : {}} onClick={()=>setOrderStatus("Delivered")}>Delivered</button>

                <button className={orderStatus==="Returned" ? "active" : {}} onClick={()=>setOrderStatus("Returned")}>Returned</button>

                <button className={orderStatus==="Refunded" ? "active" : {}} onClick={()=>setOrderStatus("Refunded")}>Refunded</button>

                <button className={orderStatus==="payment failed" ? "active" : {}} onClick={()=>setOrderStatus("payment failed")}>Payment failed</button>
            </div>

            <div>

            </div>

            {orders.map(order => <SingleAdminOrder key={order._id} order={order}>
            </SingleAdminOrder>)}
        </main>
    );
};

export default AdminOrder;