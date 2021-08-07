import React, { useState } from "react";
import { Link } from "@reach/router";
import { auth } from "../firebase";
import styles from "../styles/pages/Auth.module.css";

const PasswordReset = () => {
  const [email, setEmail] = useState("");
  const [emailHasBeenSent, setEmailHasBeenSent] = useState(false);
  const [error, setError] = useState(null);
  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;
    if (name === "userEmail") {
      setEmail(value);
    }
  };
  const sendResetEmail = (event) => {
    event.preventDefault();
    auth
      .sendPasswordResetEmail(email)
      .then(() => {
        setEmailHasBeenSent(true);
        setTimeout(() => {
          setEmailHasBeenSent(false);
        }, 3000);
      })
      .catch(() => {
        setError("Error resetting password");
      });
  };
  return (
    <div className={styles.container}>
      <div>
        <form action="">
          <h1>Reset your Password</h1>
          {emailHasBeenSent && <div>An email has been sent to you!</div>}
          {error !== null && <div>{error}</div>}
          <label htmlFor="userEmail">Email:</label>
          <input
            type="email"
            name="userEmail"
            id="userEmail"
            value={email}
            placeholder="Input your email"
            onChange={onChangeHandler}
          />
          <button onClick={sendResetEmail}>Send me a reset link</button>
        </form>
        <Link
          to="/"
          style={{
            marginTop: 12,
            fontWeight: "bold",
            border: "1px solid #fefefe",
            padding: 4,
            borderRadius: 8,
          }}
        >
          &larr; back to sign in page
        </Link>
      </div>
    </div>
  );
};
export default PasswordReset;
