import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { app } from "./firebaseConfig";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const [activeUser, setActiveUser] = useState()
    const [loading, setLoading] = useState(true)

    const auth = getAuth(app)
    
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            if (currentUser) {
                setActiveUser(currentUser)
                setLoading(false)
            } else {
                setActiveUser(null)
                setLoading(false)
            }
        })
        return unsubscribe
    }, [])

    const credencials = {
        activeUser,
        loading
    }

    if (loading){
        return <div>loading...</div>
    }

    if(activeUser){
        return <>{children}</>
    }

    return (
        <Navigate to="login"></Navigate>
    );
};

export default PrivateRoute;