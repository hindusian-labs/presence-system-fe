import React from "react";
import { Navigate } from "react-router-dom";
const ProtectedRoute = ({ children }) => {
  const isAuth = JSON.parse(localStorage.getItem("auth"))?.isAuth || undefined;
  return isAuth ? children : <Navigate to="/" />;
};
export default ProtectedRoute;
