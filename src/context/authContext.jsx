import { createContext, useReducer, useState } from "react";
import axios from "axios";
import { authReducer, intialAuth } from "../reducer/authReducer";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userDetails, setUserDetails] = useState({ email: "", password: "" });
  const [authState, authDispatch] = useReducer(authReducer, intialAuth);
  const [signUpDetails, setSignUpDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [isPassVisible, setIsPassVisible] = useState(false);
  const navigate = useNavigate();

  const [user, setUser] = useState();

  const userLogIn = async () => {
    try {
      const { status, data } = await axios.post("/api/auth/login", userDetails);

      if (status === 200) {
        localStorage.setItem(
          "userSignUpDetails",
          JSON.stringify(data.foundUser)
        );
        authDispatch({ type: "HANDLE_SIGNIN", payload: true });
      }
      localStorage.setItem("encodedToken", JSON.stringify(data.encodedToken));
    } catch (error) {
      console.error(error);
    }
  };

  // const userLogIn = async () => {
  //   try {
  //     const { status, data } = await axios.post("/api/auth/login", userDetails);
  //     if (status === 200) {
  //       authDispatch({ type: "HANDLE_SIGNIN", payload: true });
  //       localStorage.setItem(
  //         "userSignUpDetails",
  //         JSON.stringify(data.foundUser)
  //       );
  //     }
  //     localStorage.setItem("encodedToken", JSON.stringify(data.encodedToken));
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const handleSignOut = () => {
    authDispatch({ type: "HANDLE_SIGNOUT", payload: false });
    localStorage.removeItem("encodedToken");
    localStorage.removeItem("userSignUpDetails", userSignUpDetails);
    navigate("/");
  };

  const userSignUpDetails = async () => {
    try {
      const res = await axios.post("/api/auth/signup", signUpDetails);
      // console.log(res);

      localStorage.setItem(
        "userSignUpDetails",
        JSON.stringify(res.data.createdUser)
      );

      localStorage.setItem(
        "encodedToken",
        JSON.stringify(res.data.encodedToken)
      );

      setUser(res.data.createdUser);
      authDispatch({ type: "HANDLE_SIGNIN", payload: true });
      navigate("/productlistingpage");
    } catch (error) {
      console.error("Error in userSignUpDetails:", error);
    }
  };

  // const userSignUpDetails = async () => {
  //   try {
  //     const {
  //       data: { createdUser, encodedToken },
  //     } = await axios.post("/api/auth/signup", signUpDetails);

  //     localStorage.setItem("userSignUpDetails", JSON.stringify(createdUser));
  //     localStorage.setItem(
  //       "encodedTokenforSignUp",
  //       JSON.stringify(encodedToken)
  //     );
  //     setUser(JSON.stringify(createdUser));
  //     authDispatch({ type: "HANDLE_SIGNIN", payload: true });
  //     navigate("/productlistingpage");
  //   } catch (error) {
  //     console.error("Error in userSignUpDetails:", error);
  //   }
  // };

  // console.log(user);

  const guestSignIn = async (email, password) => {
    try {
      const { status, data } = await axios.post("/api/auth/login", {
        email,
        password,
      });
      if (status === 200) {
        // authDispatch({ type: "HANDLE_SIGNIN", payload: true });
        localStorage.setItem(
          "userSignUpDetails",
          JSON.stringify(data.foundUser)
        );
        localStorage.setItem("encodedToken", JSON.stringify(data.encodedToken));
        authDispatch({ type: "HANDLE_SIGNIN", payload: true });
      }
    } catch (error) {
      console.error("Error in GuestSignIn", error);
    }
  };

  const handleShowAndHidePassword = () => {
    setIsPassVisible(!isPassVisible);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        userDetails,
        setUserDetails,
        authState,
        userLogIn,
        handleSignOut,
        signUpDetails,
        setSignUpDetails,
        handleShowAndHidePassword,
        isPassVisible,
        userSignUpDetails,
        guestSignIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
