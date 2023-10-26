import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../Context/LoginContext";

const Login = () => {
  const { isLogin, logIn, logOut } = useAuth();
  const Navigate = useNavigate();

  function handleChecklogin() {
    logIn();
    Navigate("/profile", { replace: true });
  }

 
  // useEffect(() => {
  //   if (checkLogin) {
  //     Navigate("/profile", { replace: true });
  //   } else {
  //     Navigate("/login", { replace: true });
  //   }
  // }, [checkLogin, Navigate]);

  // useEffect(() => {
  //   if (checkLogin) {
  //     console.log(checkLogin);
  //     Navigate("/profile");
  //   } else if (isLogin && Location.pathname === "/login") {
  //     Navigate("/login"); // Or navigate to another default route when already logged in
  //   }
  // }, [checkLogin, Navigate, isLogin, Location.pathname]);

  return (
    <>
      {" "}
      <h1>using AuthContext</h1>
      <button onClick={handleChecklogin}>CLick button to Login</button>
      
    </>
  );
};

export default Login;
