import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/LoginContext";

const Profiles = () => {
  const { isLogin, logOut } = useAuth();
  const Navigate = useNavigate();

  useEffect(() => {
    if (!isLogin) {
      Navigate("/login");
    }
  }, [isLogin, Navigate]);

  function handleChecklogOut() {
    logOut();
    Navigate("/login", { replace: true });
  }

  return (
    <>
      <h1>Profiles</h1>
      <button onClick={handleChecklogOut}>CLick button to LogOut</button>
    </>
  );
};

export default Profiles;
