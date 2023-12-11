import { Link } from "react-router-dom"
import "./signin.css"
import { useContext, useState } from "react"
import { AuthContext } from "../../context/authContext"
import { User } from "../User/User"

export const SignIn=()=>{

    const {userDetails,setUserDetails , authState,userLogIn}=useContext(AuthContext)



    const handleUserDetails=(e)=>{
        // [email,password]=e.target;
        // setUserDetails((pre)=>{...pre,[name]: e.target.value})
        setUserDetails({...userDetails,[e.target.name]:e.target.value})
    }

    console.log(userDetails);

    const [isPassVisible,setIsPassVisible]=useState(false);

    const handleShowAndHidePassword=()=>{
        setIsPassVisible(!isPassVisible)
    }

    const handleLoggedInClick=(e)=>{
        e.preventDefault();
        if(userDetails.email ==="" || userDetails.password === "" ){
           console.log("plese fill the input");
        }
        userLogIn(e)
    }

    return(
        <>

        {authState.isLoggedIn===true ?(<User/>):( 

        <div className="singnin-container">
        
        <p className="signin-heading" >Sign in</p>

        <input className="email-container" type="text" name="email"  placeholder="Enter email" value={userDetails.email}   onChange={handleUserDetails}/>

        <div className="password-container">
            <input type={isPassVisible?"text":"password"} name="password" placeholder="Enter password"  value={userDetails.password} onChange={handleUserDetails}/>

            <span className="passwordtoggle" onClick={handleShowAndHidePassword} type="button">
            {isPassVisible?"Hide":"Show"}
            </span>
        </div>

        <button className="signin-button" onClick={handleLoggedInClick}>Log In</button>

        <p>
        <Link to="/signup" >Create New Account</Link>
        </p>

        </div>)
    }
       
        </>
    )
}