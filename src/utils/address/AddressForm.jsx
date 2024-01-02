import { useContext } from "react";
import "./addressform.css";
import { AddressContext } from "../../context/addressContext";
import { useNavigate } from "react-router-dom";

export const AddressForm = () => {
  const { address, setAddress, input, setInput } = useContext(AddressContext);

  const navigate = useNavigate();

  const handleAddressInput = (e) => {
    const { name, value } = e.target;
    setInput((pre) => ({ ...pre, [name]: value }));
  };

  const addtoAddress = (inputAddress) => {
    // e.preventDefault();
    console.log("adding  address:");
    setAddress([...address, inputAddress]);
    setInput({
      id: "",
      name: "",
      area: "",
      city: "",
      state: "",
      pincode: "",
      phoneNumber: "",
    });
    navigate("/user");
  };

  return (
    <>
      <div className="address-page-container"></div>
      <div className="address-container">
        <h3>Address</h3>

        <div className="input-fields">
          <label className="input-field-label">
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={input.name}
              onChange={handleAddressInput}
              className="input-field"
            />
          </label>
          <br />
          <label className="input-field-label">
            <input
              type="text"
              placeholder="Area"
              name="area"
              value={input.area}
              onChange={handleAddressInput}
              className="input-field"
            />
          </label>
          <br />
          <label className="input-field-label">
            <input
              type="text"
              placeholder="City"
              name="city"
              value={input.city}
              onChange={handleAddressInput}
              className="input-field"
            />
          </label>
          <br />
          <label className="input-field-label">
            <input
              type="text"
              placeholder="State"
              name="state"
              value={input.state}
              onChange={handleAddressInput}
              className="input-field"
            />
          </label>
          <br />
          <label className="input-field-label">
            <input
              type="number"
              placeholder="PinCode"
              name="pincode"
              value={input.pincode}
              onChange={handleAddressInput}
              className="input-field"
            />
          </label>
          <br />
          <label className="input-field-label">
            <input
              type="number"
              placeholder="Phone No."
              name="phoneNumber"
              value={input.phoneNumber}
              onChange={handleAddressInput}
              className="input-field"
            />
          </label>

          <br />
        </div>

        <div>
          <button className="submit-btn" onClick={() => addtoAddress(input)}>
            Submit
          </button>
        </div>
      </div>
    </>
  );
};
