import { useContext } from "react";

import "./signup.css";
import { AuthContext } from "../../context/authContext";
import { User } from "../User/User";
import { Link } from "react-router-dom";
import {
  handleErrorToast,
  passwordMisMatchToast,
  pleaseFillInput,
} from "../../utils/toast/Toast";

export const SignUp = () => {
  const {
    authState,
    signUpDetails,
    setSignUpDetails,
    handleShowAndHidePassword,
    isPassVisible,
    userSignUpDetails,
  } = useContext(AuthContext);

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    if (
      signUpDetails.firstName.trim() === "" ||
      signUpDetails.lastName.trim() === "" ||
      signUpDetails.email.trim() === "" ||
      signUpDetails.password.trim() === "" ||
      signUpDetails.confirmPassword.trim() === ""
    ) {
      pleaseFillInput();
    } else if (signUpDetails.password !== signUpDetails.confirmPassword) {
      console.error(`Both password are mismatched, please fill correctly`);
      passwordMisMatchToast();
    } else {
      userSignUpDetails(e);
      handleErrorToast();
    }
  };

  const handleUserinput = (e) => {
    const { name, value } = e.target;
    setSignUpDetails({ ...signUpDetails, [name]: value });
  };

  return (
    <>
      <div className="signup-page-container">
        <div className="signup-container">
          {authState.isLoggedIn === true ? (
            <User />
          ) : (
            <div>
              <h1 className="signup-heading">Register</h1>
              <p className="signup-tagline">
                Ignite your experience! Sign up now for exclusive app access
              </p>

              <div className="all-input-fields">
                <label>
                  <p>Firstname</p>
                  <input
                    className="input-fields"
                    onChange={handleUserinput}
                    name="firstName"
                    value={signUpDetails.firstName}
                    placeholder="Shubham"
                  />
                </label>

                <label>
                  <p>LastName</p>
                  <input
                    className="input-fields"
                    onChange={handleUserinput}
                    name="lastName"
                    value={signUpDetails.lastName}
                    placeholder="Rana"
                  />
                </label>

                <label>
                  <p>Email</p>
                  <input
                    className="input-fields"
                    onChange={handleUserinput}
                    name="email"
                    value={signUpDetails.email}
                    placeholder="shubhamrana19599@gmail.com"
                  />
                </label>

                <label>
                  <p>Password</p>
                  <input
                    className="input-fields"
                    onChange={handleUserinput}
                    type={isPassVisible ? "text" : "password"}
                    name="password"
                    value={signUpDetails.password}
                    placeholder="************"
                  />
                  <p
                    className="passwordvisibletoggle"
                    onClick={handleShowAndHidePassword}
                    type="button"
                  >
                    {isPassVisible ? "Hide" : "Show"}
                  </p>
                </label>

                <label>
                  <p>Confirm Password</p>
                  <input
                    className="input-fields"
                    onChange={handleUserinput}
                    name="confirmPassword"
                    value={signUpDetails.confirmPassword}
                    placeholder="************"
                  />
                </label>
              </div>

              <div>
                <button
                  className="signupform-submitbtn"
                  onClick={handleSignUpSubmit}
                >
                  Submit
                </button>
              </div>

              <div className="signin-link">
                Already have an acount ? <Link to="/signin">SignIn</Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
