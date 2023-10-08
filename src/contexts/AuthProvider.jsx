// react imports
import PropTypes from "prop-types";
import { useState, useEffect, createContext } from "react";

// firebase imports
import app from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

export const AuthContext = createContext();

// set up auth
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  // set up user state
  const [user, setUser] = useState(null);

  // user creation
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // // set up listener for users
  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       console.log(user);
  //     }
  //   });
  // }, []);

  // pass this object to the provider's value
  const authObj = {
    user,
    createUser,
  };

  return (
    <AuthContext.Provider value={authObj}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.any,
};

export default AuthProvider;
