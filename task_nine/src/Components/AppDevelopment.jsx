import React from "react";
import { Outlet } from "react-router-dom";

const AppDevelopment = () => {
  return (
    <>
      <div>AppDevelopment</div>
      <Outlet />
    </>
  );
};

export default AppDevelopment;
