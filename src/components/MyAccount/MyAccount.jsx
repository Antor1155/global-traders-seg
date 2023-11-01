import { useContext } from "react";
import { userContext } from "../../utilities/UserContextProvider";
import { useNavigate } from "react-router-dom";

const MyAccount = () => {
    const {user, loading, logOut} = useContext(userContext)
    const navigate =  useNavigate()

    const handleSingOut = ()=>{
        logOut().then(()=>{
            navigate("/")
        }
        ).catch(error => console.log(error))
    }

    return (
        <div>
            
            <h1>This is my account page</h1>

                <h2>Email: {user?.email}</h2>

                <button onClick={handleSingOut}>Sign Out</button>

        </div>
    );
};

export default MyAccount;