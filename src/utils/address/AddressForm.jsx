import { useContext } from "react";
import "./addressform.css";
import { AddressContext } from "../../context/addressContext";

export const AddressForm = () => {
  const {
    addressDetails,
    setAddressDetails,
    setShowAddressPageToggle,
    submitAddressDetails,
  } = useContext(AddressContext);

  const handleAddressInput = (e) => {
    setAddressDetails({ ...addressDetails, [e.target.name]: e.target.value });
  };
  //   console.log(addressDetails);

  const submitBtnHandler = (e) => {
    e.preventDefault();
    submitAddressDetails({ ...addressDetails, id: addressDetails.length + 1 });
    setShowAddressPageToggle(false);
  };

  return (
    <>
      <div className="address-container">
        <h3>Address</h3>

        <form onSubmit={submitBtnHandler} className="input-fields">
          <label>
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={addressDetails.name}
              onChange={handleAddressInput}
            />
          </label>
          <br />
          <label>
            <input
              type="text"
              placeholder="Area"
              name="area"
              value={addressDetails.area}
              onChange={handleAddressInput}
            />
          </label>
          <br />
          <label>
            <input
              type="text"
              placeholder="City"
              name="city"
              value={addressDetails.city}
              onChange={handleAddressInput}
            />
          </label>
          <br />
          <label>
            <input
              type="text"
              placeholder="State"
              name="state"
              value={addressDetails.state}
              onChange={handleAddressInput}
            />
          </label>
          <br />
          <label>
            <input
              type="number"
              placeholder="PinCode"
              name="pincode"
              value={addressDetails.pincode}
              onChange={handleAddressInput}
            />
          </label>
          <br />
          <label>
            <input
              type="number"
              placeholder="Phone No."
              name="phoneNumber"
              value={addressDetails.phoneNumber}
              onChange={handleAddressInput}
            />
          </label>
          onChange={handleAddressInput}
          <br />
        </form>

        <div className="submit-cancel-btn">
          <button className="submit-btn" type="submit">
            Submit
          </button>

          <button
            className="cancel-btn"
            onClick={() => setShowAddressPageToggle(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};
