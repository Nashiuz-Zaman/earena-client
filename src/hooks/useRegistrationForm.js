// react imports
import { useState } from "react";

// react router dom imports
import { useNavigate } from "react-router-dom";

// custom hooks import
import useAuthContext from "./useAuthContext";

const useRegistrationForm = () => {
  const { createUser, updateUser } = useAuthContext();
  const navigate = useNavigate();

  // states of the form input boxes
  const [registrationInfo, setRegistrationInfo] = useState({
    email: "",
    password: "",
    username: "",
    photoUrl: "",
    errors: [],
  });

  // on change run this function for username field
  const getUsername = (e) => {
    setRegistrationInfo({ ...registrationInfo, username: e.target.value });
  };

  // on change run this function for photo url field
  const getPhotoUrl = (e) => {
    setRegistrationInfo({ ...registrationInfo, photoUrl: e.target.value });
  };

  // on change run this function for email field
  const getEmail = (e) => {
    setRegistrationInfo({ ...registrationInfo, email: e.target.value });
  };

  // on change run this function for password field
  const getPassword = (e) => {
    setRegistrationInfo({ ...registrationInfo, password: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    createUser(registrationInfo.email, registrationInfo.password)
      .then(() => {
        updateUser(registrationInfo.username, registrationInfo.photoUrl)
          .then(() => {
            navigate("/");
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return {
    registrationInfo,
    getUsername,
    getEmail,
    getPassword,
    getPhotoUrl,
    handleSubmit,
  };
};

export default useRegistrationForm;
