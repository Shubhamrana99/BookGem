import { createContext, useReducer, useState } from "react";
import  axios  from "axios";
import { authReducer, intialAuth } from "../reducer/authReducer";
import { useNavigate } from "react-router-dom";

export const AuthContext=createContext();

export const AuthProvider=({children})=>{
    const [userDetails,setUserDetails]=useState({ email: "", password: "" });
    const [authState,authDispatch]=useReducer(authReducer,intialAuth);
    const [signUpDetails,setSignUpDetails]=useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:""
      })

    const navigate=useNavigate();

    const userLogIn=async()=>{
        try {
            const {status,data} =await axios.post("/api/auth/login",userDetails);
            if(status===200){
                authDispatch({type:"HANDLE_SIGNIN" ,payload:true});
                localStorage.setItem("loginUserDetails",JSON.stringify(data.foundUser))
            }
            localStorage.setItem("encodedToken",JSON.stringify(data.encodedToken))
        } catch (error) {
            console.error(error);
        }
    }

    const handleSignOut=()=>{
        authDispatch({type:"HANDLE_SIGNOUT" , payload:false});
        localStorage.removeItem("encodedToken");
        localStorage.removeItem("","");
        navigate("/")
        
    }

    return(
        <AuthContext.Provider value={{
            userDetails,
            setUserDetails,
            authState,
            userLogIn,
            handleSignOut,
            signUpDetails,
            setSignUpDetails
        }}>{children}</AuthContext.Provider>
    )
}