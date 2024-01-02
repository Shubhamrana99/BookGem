import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { Navigate, useLocation } from "react-router-dom";

export const RequireAuth = ({ children }) => {
  const { authState } = useContext(AuthContext);
  const location = useLocation();
  return authState.isLoggedIn ? (
    children
  ) : (
    <Navigate to="/user" state={{ from: location }} />
  );
};
