import axiosInstance from "../../utilities/axiosInstance";
import "./AdminOrder.css"

import React, { useEffect, useState } from 'react';
import SingleAdminOrder from "./SingleAdminOrder";

const AdminOrder = () => {
    const [orders, setOrders] = useState([])
    useEffect(()=>{
        axiosInstance.get("admin-orders")
        .then(res => setOrders(res.data))
        .catch(error => console.log(error))
    },[])


    return (
        <main>
            <h3>This is all admin order page</h3>
            {orders.map(order => <SingleAdminOrder key={order._id} order={order}></SingleAdminOrder>)}
        </main>
    );
};

export default AdminOrder;