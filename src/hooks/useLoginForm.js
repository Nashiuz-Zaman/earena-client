// react imports
import { useState } from "react";

// react router dom imports
import { useNavigate } from "react-router-dom";
//
import { useLocation } from "react-router-dom";

// custom hook
import useAuthContext from "./useAuthContext";

const useLoginForm = () => {
  const { logIn, setAppLoading, googleSignIn } = useAuthContext();
  const navigate = useNavigate();
  const { state } = useLocation();

  // states of the form input boxes
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  // on change run this function for email field
  const getEmail = (e) => {
    setLoginInfo({ ...loginInfo, email: e.target.value });
  };

  // on change run this function for password field
  const getPassword = (e) => {
    setLoginInfo({ ...loginInfo, password: e.target.value });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(() => {
        if (state) {
          navigate(state);
        } else {
          navigate("/");
        }
      })
      .catch((errors) => console.log(errors));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    logIn(loginInfo.email, loginInfo.password)
      .then(() => {
        if (state) {
          navigate(state);
        } else {
          navigate("/");
        }
      })
      .catch((curError) => {
        setError(curError.message);
        setAppLoading(false);
      });
  };

  return {
    loginInfo,
    getEmail,
    getPassword,
    handleSubmit,
    error,
    handleGoogleSignIn,
  };
};

export default useLoginForm;
