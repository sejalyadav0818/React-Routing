import { React, createContext, useContext } from "react";

export const LoginContext = createContext();

export const useAuth = () => {
  return useContext(LoginContext);
};
