import { createContext, useReducer, useState } from "react";

export const AddressContext = createContext();

const addressReducer = (state, { type, payload }) => {
  switch (type) {
    case "SHOW_ADDRESS_PAGE":
      return {
        ...state,
        showAddressPage: payload,
      };

    case "SUBMIT_ADDRESS_DETAILS":
      return {
        ...state,
        addressDetails: [...state.addressDetails, payload],
      };

    default:
      break;
  }
};

const intialAddressState = {
  addressDetails: [],
  showAddressToggle: false,
};

export const AddressProvider = ({ children }) => {
  const [addressesData, addressDispatch] = useReducer(
    addressReducer,
    intialAddressState
  );

  const [addressDetails, setAddressDetails] = useState({
    id: null,
    name: "",
    area: "",
    city: "",
    state: "",
    pincode: null,
    phoneNumber: null,
  });

  const setShowAddressPageToggle = (showAddressPage) => {
    addressDispatch({ type: "SHOW_ADDRESS_PAGE", payload: showAddressPage });
  };

  const submitAddressDetails = (address) => {
    addressDispatch({ type: "SUBMIT_ADDRESS_DETAILS", payload: address });
  };

  return (
    <AddressContext.Provider
      value={{
        setShowAddressPageToggle,
        addressesData,
        addressDetails,
        setAddressDetails,
        submitAddressDetails,
      }}
    >
      {children}
    </AddressContext.Provider>
  );
};
