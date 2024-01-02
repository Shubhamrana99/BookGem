import { createContext, useState } from "react";

export const AddressContext = createContext();

export const AddressProvider = ({ children }) => {
  const [address, setAddress] = useState([]);

  const [input, setInput] = useState({
    id: "",
    name: "",
    area: "",
    city: "",
    state: "",
    pincode: "",
    phoneNumber: "",
  });

  return (
    <AddressContext.Provider value={{ address, setAddress, input, setInput }}>
      {children}
    </AddressContext.Provider>
  );
};
