import { useContext, useState } from "react"

import "./signup.css";
import { AuthContext } from "../../context/authContext"
import { User } from "../User/User"
import { Link } from "react-router-dom";
import sign from "jwt-encode";

export const SignUp=()=>{

  const {authState ,signUpDetails,setSignUpDetails}=useContext(AuthContext);

 

  const handleUserinput=(e)=>{
    setSignUpDetails({...signUpDetails,[e.target.name]:e.target.value})
  }
  console.log(signUpDetails);

    return(
        <>
          <div className="signup-page-container" >
              <div className="signup-container">
               {authState.isLoggedIn===true?(
                <User/>
               ):(
                <div>
                     <h1 className="signup-heading">Register</h1>
                     <p className="signup-tagline">Ignite your experience! Sign up now for exclusive app access</p>
                     
                     <label>
                     <p>Firstname</p>
                     <input onChange={handleUserinput}
                      name="firstName"
                      value={signUpDetails.firstName}
                      placeholder="Shubham"
                     />
                     </label>
                     
                     <label>
                     <p>LastName</p>
                     <input onChange={handleUserinput}
                     name="lastName"
                     value={signUpDetails.lastName}
                     placeholder="Rana"
                     />
                     </label>
                     
                     <label>
                     <p>Email</p>
                     <input onChange={handleUserinput} 
                     name="email"
                     value={signUpDetails.email}
                     placeholder="shubhamrana19599@gmail.com"
                     />
                     </label>
                     
                     <label>
                     <p>Password</p>
                     <input onChange={handleUserinput}
                     name="password"
                     value={signUpDetails.password}
                     placeholder="************"
                     />
                     </label>

                     <label>
                     <p>Confirm Password</p>
                     <input onChange={handleUserinput}
                     name="confirmPassword"
                     value={signUpDetails.confirmPassword}
                     placeholder="************"
                     />
                     </label>

                   <div className="signupform-submitbtn">
                       <button>Submit</button>
                   </div>

                   <div className="signin-link">
                   Already have an acount ? <Link to="/signin">SignIn</Link>
                   </div>

                     

                </div>
               )}
              </div>
          </div>
        </>
    )
}