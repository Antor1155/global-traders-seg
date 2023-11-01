import React, { useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { app } from '../../utilities/firebaseConfig';
import "./LoginAndSignup.css"


const LoginAndSignup = () => {
    const provider = new GoogleAuthProvider()
    const auth = getAuth(app)

    const [user, setUser] = useState(null)
    const [signin, setSignin] = useState(true)
    const [errorMessage, setErrorMessage] = useState("")

    const settingSingin = () => {
        setSignin(true)
        setErrorMessage("")
    }
    const settingSingup = () => {
        setSignin(false)
        setErrorMessage("")
    }

    const handleGoogleSignin = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const loggedinUser = result.user
                setUser(loggedinUser)
                console.log(loggedinUser)
            })
            .catch(error => {
                console.log(error)
                setErrorMessage(error)
            })
    }

    const handleSignOut = () => {
        signOut(auth).then(result => {
            setUser(null)
        })
            .catch(error => {
                console.log(error)
            })
    }

    const handleSinginWithEmail = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        
        setErrorMessage("")
        

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

                const user = userCredential.user;
                setUser(user)
                console.log("siggned in properly")
                e.target.email.value = ""
                e.target.password.value = ""
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log("error in signin ***, ", errorMessage)
                setErrorMessage(errorMessage)
            });

    }

    const handleSingupWithEmail = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        const rePassword = e.target.rePassword.value
        
        setErrorMessage("")

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

                const user = userCredential.user;
                console.log("siggned up properly")
                settingSingin()

                e.target.email.value = ""
                e.target.password.value = ""
                e.target.rePassword.value = ""
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log("error in signin ***, ", errorMessage)
                setErrorMessage(errorMessage)
            });

    }

    return (
        <div className='loginAndSignup'>
            {signin &&

                <form onSubmit={handleSinginWithEmail}>
                    <label htmlFor='emial'>Email</label>
                    <input type='email' id='email' name='email' placeholder='Email' required></input>

                    <lable htmlFor="password"> Password</lable>
                    <input type='password' id='password' name='password' placeholder='Password' required></input>

                    <button type='submit' className='submit'> Sign in</button>

                    {errorMessage && 
                        <p className='error'>{errorMessage}</p>
                    }

                    <p>New to the site ? <button className='link' type='button' onClick={settingSingup}>Signup</button></p>
                </form>

            }
            {!signin &&
                <form onSubmit={handleSingupWithEmail}>
                    <label htmlFor='email'>Email</label>
                    <input type='email' id='email' name='email' placeholder='Email' required></input>

                    <lable htmlFor="password"> Password</lable>
                    <input type='password' id='password' name='password' placeholder='Password' required></input>

                    <lable htmlFor="rePassword">Re-enter Password</lable>
                    <input type='password' id='rePassword' name='rePassword' required></input>

                    <button type='submit' className='submit'> Sign up</button>

                    {errorMessage && 
                        <p className='error'>{errorMessage}</p>
                    }

                    <p>Already have account ? <button className='link' type='button' onClick={settingSingin}>SignIn</button></p>
                </form>

            }

            <button onClick={handleGoogleSignin} className='googleSignin'>Continue with Google</button>


            {user &&
                <div>
                    <button onClick={handleSignOut}>Sign Out</button>
                    <h3>user : {user?.displayName}</h3>
                    <h4>Email : {user?.email}</h4>
                </div>}
        </div>
    );
};

export default LoginAndSignup;