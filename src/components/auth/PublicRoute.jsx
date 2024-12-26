import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export const PublicRoute = () => {
  const user = useSelector((state) => state.user.value);
  const isLogin = user.token;

  if (isLogin) {
    return <Navigate replace to="/" />
  }
  
  return <Outlet />
}
