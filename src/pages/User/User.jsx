import { useContext } from "react";
import { SignIn } from "../SignIn/SignIn";
import "./user.css";
import { AuthContext } from "../../context/authContext";

export const User = () => {
  const { authState, handleSignOut } = useContext(AuthContext);

  const user = JSON.parse(localStorage.getItem("loginUserDetails"));
  // console.log(userDetails);

  return (
    <>
      <div className="user-container">
        {!authState.isLoggedIn ? (
          <SignIn />
        ) : (
          <div className="userDetails-container">
            <h3 className="profile-headings">Profile Details</h3>
            <div className="profile-details">
              <p>
                Name : {user.firstName} {user.lastName}
              </p>
              <p>Email : {user.email}</p>
            </div>
            
            <button className="signoutbtn" onClick={handleSignOut}>
              Sign Out
            </button>

            <button className="addressbtn">Add Address</button>
          </div>
        )}
      </div>
    </>
  );
};
