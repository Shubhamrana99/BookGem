import { useContext } from "react";
import { SignIn } from "../SignIn/SignIn";
import "./user.css";
import { AuthContext } from "../../context/authContext";
import { AddressContext } from "../../context/addressContext";
import { AddressForm } from "../../utils/address/AddressForm";
import { useNavigate } from "react-router-dom";

export const User = () => {
  const { authState, handleSignOut } = useContext(AuthContext);
  const {
    addressesData: { addressDetails, showAddressToggle },
    setShowAddressPageToggle,
  } = useContext(AddressContext);

  const user = JSON.parse(localStorage.getItem("userSignUpDetails"));
  // const user = JSON.parse(localStorage.getItem("user"));
  // console.log(userDetails);

  console.log(user);

  const navigate = useNavigate();

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

            <div className="address-details">
              {addressDetails.map(
                ({ id, name, area, city, state, pincode, phoneNumber }) => {
                  return (
                    <li key={id}>
                      <p>{name}</p>
                      <p>{area}</p>
                      <p>{city}</p>
                      <p>{state}</p>
                      <p>{pincode}</p>
                      <p>{phoneNumber}</p>
                    </li>
                  );
                }
              )}
            </div>

            <button className="signoutbtn" onClick={handleSignOut}>
              Sign Out
            </button>

            <button onClick={navigate("/address")} className="addressbtn">
              Add Address
            </button>
          </div>
        )}

        <div className="address-container">
          {showAddressToggle && <AddressForm />}
        </div>
      </div>
    </>
  );
};
