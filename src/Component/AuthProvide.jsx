import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth/cordova";
import auth from "./Firebase.config";
// import { GithubAuthProvider, signInWithPopup} from "firebase/auth/web-extension";
export const AuthContext=createContext(null)
// const provider = new GithubAuthProvider(); 
const AuthProvide = ({children}) => {
    const [user ,setUser]=useState(null)
    const [loading,setLoading] =useState(true)
 
    const createUser =(email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const LoginUser = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    // const signInWithGithub = () =>{
    //     setLoading(true)
    //     return signInWithPopup(auth,provider)
    // }

    const LogOut =() =>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currnetUser)=>{
            setUser(currnetUser);
            console.log('Observing current user in firebase');
            setLoading(false)
        });
        return () =>{
  unsubscribe();
        }
    },[])
    const authInfo ={user,LoginUser,createUser,LogOut,loading}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvide;
AuthProvide.propTypes = {
    children: PropTypes.node,
  };