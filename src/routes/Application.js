import React, { useContext } from "react";
import { Router } from "@reach/router";
import SignIn from "../pages/auth/SignIn";
import SignUp from "../pages/auth/SignUp";
import Main from "../pages/Main";
import Vessel from "../pages/Vessel";
import PasswordReset from "../pages/PasswordReset";
import { UserContext } from "../providers/UserProvider";
function Application() {
  const user = useContext(UserContext);
  return user ? (
    <Router>
      <Main path="/" />
      <Vessel path="/vessel" />
    </Router>
  ) : (
    <Router>
      <SignUp path="signUp" />
      <SignIn path="/" />
      <PasswordReset path="passwordReset" />
    </Router>
  );
}
export default Application;
