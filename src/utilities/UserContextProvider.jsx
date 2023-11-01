import { createContext } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { app } from "./firebaseConfig";

export const userContext = createContext()

const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)

    const auth = getAuth(app)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            if (currentUser) {
                setUser(currentUser)
                setLoading(false)
            } else {
                setUser(null)
                setLoading(false)
            }
        })
        return unsubscribe
    }, [])

    const logOut = () => {

        signOut(auth).then(
            setUser(null)
        ).catch(error => {
            console.log("error in sign out : ", error)
        })
    }

    const credencials = {
        user,
        loading,
        logOut
    }

    return (
        <userContext.Provider value={credencials}>
            {children}
        </userContext.Provider>
    );
};

export default UserContextProvider;