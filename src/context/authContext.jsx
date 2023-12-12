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

    const userSignUpDetails=async()=>{
       try {
        const {
            data: { createdUser, encodedToken },
          } = await axios.post("/api/auth/signup", signUpDetails);
        // const{
        //     data: {createdUser,encodedToken}
        // }=await axios.post("/api/auth/signup",signUpDetails);
        authDispatch({type:"HANDLE_SIGNIN",payload:true});
        localStorage.setItem(JSON.stringify("userSignUpDetails",createdUser))
        localStorage.setItem(JSON.stringify("encodedTokenforSignUp",encodedToken))
        navigate("/productlistingpage")
       } catch (error) {
        console.error("Error in userSignUpDetails:", error);
       }
    }

    const [isPassVisible,setIsPassVisible]=useState(false);

    const handleShowAndHidePassword=()=>{
        setIsPassVisible(!isPassVisible)
    }

    return(
        <AuthContext.Provider value={{
            userDetails,
            setUserDetails,
            authState,
            userLogIn,
            handleSignOut,
            signUpDetails,
            setSignUpDetails,
            handleShowAndHidePassword,
            isPassVisible,
            userSignUpDetails

        }}>{children}</AuthContext.Provider>
    )
}