import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { userContext } from "./UserContextProvider";

const PrivateRoute = ({ children }) => {
    const {user, loading} = useContext(userContext)

    if (loading){
        return <div>loading...</div>
    }

    if(user){
        return <>{children}</>
    }

    return (
        <Navigate to="/login"></Navigate>
    );
};

export default PrivateRoute;