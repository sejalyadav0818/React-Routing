import React from "react";
import { useState } from "react";
import { LoginContext } from "./LoginContext";

const LoginProvider = ({ children }) => {
  const [isLogin, setisLogin] = useState(false);

  const logIn = () => {
    setisLogin(true);
  };

  const logOut = () => {
    setisLogin(false);
  };

  const value = {
    isLogin,
    logIn,
    logOut,
  };
  return (
    <LoginContext.Provider value={value}>{children}</LoginContext.Provider>
  );
};

export default LoginProvider;
