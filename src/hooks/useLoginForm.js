// react imports
import { useState } from "react";

// react router dom imports
import { useNavigate } from "react-router-dom";
//
import { useLocation } from "react-router-dom";

// custom hook
import useAuthContext from "./useAuthContext";

const useLoginForm = () => {
  const { logIn, setAppLoading } = useAuthContext();
  const navigate = useNavigate();
  const { state } = useLocation();

  // states of the form input boxes
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
    errors: [],
  });

  // on change run this function for email field
  const getEmail = (e) => {
    setLoginInfo({ ...loginInfo, email: e.target.value });
  };

  // on change run this function for password field
  const getPassword = (e) => {
    setLoginInfo({ ...loginInfo, password: e.target.value });
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
      .catch((error) => {
        console.log(error.message);
        setAppLoading(false);
      });
  };

  return { loginInfo, getEmail, getPassword, handleSubmit };
};

export default useLoginForm;
