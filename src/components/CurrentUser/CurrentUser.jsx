import React, { useContext } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  getAuth,
} from "firebase/auth";
import { UserContext } from "../../context/userContext";
import { app } from "../../services/db";
// Import the functions you need from the SDKs you need

//

const provider = new GoogleAuthProvider();
const auth = getAuth(app);

export default function CurrentUser() {
  const { currentUser } = useContext(UserContext);

  const login = () => {
    signInWithPopup(auth, provider)
      .then((result) => {})
      .catch((error) => {});
  };

  const logout = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className="d-flex align-items-center">
      {!currentUser ? (
        <>
          <button className="btn btn-light bckg-color-primary" onClick={login}>
            Login
          </button>
        </>
      ) : (
        <>
          <img
            className="user-picture"
            src={`${currentUser.photoURL}`}
            alt="user profile"
          ></img>
          <button className="btn btn-light bckg-color-primary" onClick={logout}>
            Logout
          </button>
        </>
      )}
    </div>
  );
}
