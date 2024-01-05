import { Link, useNavigate } from "react-router-dom";
import "./signin.css";
import { useContext } from "react";

import { AuthContext } from "../../context/authContext";
import { User } from "../User/User";
import { pleaseFillInput } from "../../utils/toast/Toast";

export const SignIn = () => {
  const {
    userDetails,
    setUserDetails,
    authState,
    userLogIn,
    handleShowAndHidePassword,
    isPassVisible,
    guestSignIn,
  } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleUserDetails = (e) => {
    // [email,password]=e.target;
    // setUserDetails((pre)=>{...pre,[name]: e.target.value})
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  console.log(userDetails);

  const handleLoggedInClick = (e) => {
    e.preventDefault();
    if (userDetails.email === "" || userDetails.password === "") {
      pleaseFillInput();
    } else {
      userLogIn(e);
      navigate("/productlistingpage");
    }
  };

  return (
    <>
      <div className="signin-page-container">
        {authState.isLoggedIn === true ? (
          <User />
        ) : (
          <div className="singnin-container">
            <h2 className="signin-heading">Sign in</h2>
            <label>
              <p>Enter Email</p>
              <input
                className="email-container"
                type="text"
                name="email"
                placeholder="shubhamrana19599@gmail.com"
                value={userDetails.email}
                onChange={handleUserDetails}
              />
            </label>

            <div className="password-container">
              <p>Password</p>
              <input
                type={isPassVisible ? "text" : "password"}
                className="password-container"
                name="password"
                placeholder="************"
                value={userDetails.password}
                onChange={handleUserDetails}
              />

              <span
                className="passwordtoggle"
                onClick={handleShowAndHidePassword}
                type="button"
              >
                {isPassVisible ? "Hide" : "Show"}
              </span>
            </div>

            <button className="signin-button" onClick={handleLoggedInClick}>
              Log In
            </button>

            <button
              className="guest-signin-btn"
              onClick={() =>
                guestSignIn("shubhamrana19599@gmail.com", "Shubhamrana")
              }
            >
              LogIn As Guest
            </button>

            <p className="create-new-account">
              <Link to="/signup">Create New Account</Link>
            </p>
          </div>
        )}
      </div>
    </>
  );
};
