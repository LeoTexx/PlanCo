import React, { useContext } from "react";
import logo from "../assets/logo.png";
import { UserContext } from "../providers/UserProvider";
import Profile from "./Profile";
import styles from "../styles/components/Header.module.css";

export default function Header() {
  const user = useContext(UserContext);
  return (
    <div className={styles.container}>
      <img
        style={{ width: "40%", maxWidth: 400 }}
        src={logo}
        alt="star wars logo"
      />
      {user && <Profile />}
    </div>
  );
}
