import { useContext, useEffect, useState } from "react";
import { userContext } from "../../utilities/UserContextProvider";
import { useNavigate } from "react-router-dom";
import "./MyAccount.css"
import axiosInstance from "../../utilities/axiosInstance";
import SingleCustomerOrder from "./SingleCustomerOrder";

const MyAccount = () => {
    const { user, loading, logOut } = useContext(userContext)
    const navigate = useNavigate()

    const handleSingOut = () => {
        logOut().then(() => {
            navigate("/")
        }
        ).catch(error => console.log(error))
    }

    const [orders, setOrders] = useState([])

    useEffect(() => {
        axiosInstance.get(`client-orders/${user?.email}`)
            .then(res => setOrders(res.data))
            .catch(error => console.log(error))
    }, [])


    return (
        <div className="myAccount">

            <div id="accountDetails">
                <h2>Email: {user?.email}</h2>
                <button onClick={handleSingOut}>Sign Out</button>
            </div>

            {orders.map(order => <SingleCustomerOrder key={order._id} order={order}>
            </SingleCustomerOrder>)}

        </div>
    );
};

export default MyAccount;