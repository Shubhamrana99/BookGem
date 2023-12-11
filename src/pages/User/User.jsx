import { useContext } from "react";
import { SignIn } from "../SignIn/SignIn";
import "./user.css";
import { AuthContext } from "../../context/authContext";


export const User=()=>{

  const {authState,handleSignOut}=useContext(AuthContext)

  const user= JSON.parse(localStorage.getItem("loginUserDetails"));
// console.log(userDetails);

    return(
        <>
          <div className="user-container">
          {!authState.isLoggedIn?(
          <SignIn/>
          ):(
            <div className="userDetails-container">
            <h2>Name : {user.firstName} {user.lastName}</h2>
            <h3>Email : {user.email}</h3>

            <button onClick={handleSignOut}>Sign Out</button>

            <button>Add Address</button>

            </div>
          )}
          </div>
        </>
    )
}