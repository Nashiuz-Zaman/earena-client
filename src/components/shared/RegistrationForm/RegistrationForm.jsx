// react import
import { useState } from "react";

// react router import
import { Link } from "react-router-dom";

// shared component imports
import ButtonBtn from "./../ButtonBtn/ButtonBtn";

const RegistrationForm = () => {
  // states of the form input boxes
  const [registrationInfo, setRegistrationInfo] = useState({
    email: "",
    password: "",
    username: "",
  });

  // on change run this function for username field

  const getUsername = (e) => {
    setRegistrationInfo({ ...registrationInfo, username: e.target.value });
  };

  // on change run this function for email field
  const getEmail = (e) => {
    setRegistrationInfo({ ...registrationInfo, email: e.target.value });
  };

  // on change run this function for password field
  const getPassword = (e) => {
    setRegistrationInfo({ ...registrationInfo, password: e.target.value });
  };

  // common styles for input and label jsx elements
  const labelClasses = "block mb-2 text-sm";
  const inputClasses =
    "block w-full rounded-default border border-textLight py-2 px-2";

  console.log(registrationInfo);
  return (
    <div>
      <form className="w-full md:w-[20rem] mx-auto p-4">
        {/* username field */}
        <div className="mb-4">
          <label className={labelClasses} htmlFor="username">
            Username
          </label>
          <input
            className={inputClasses}
            onChange={getUsername}
            type="text"
            id="username"
            value={registrationInfo.username}
            placeholder="username"
            required
          />
        </div>

        {/* email field */}
        <div className="mb-4">
          <label className={labelClasses} htmlFor="email">
            Email
          </label>
          <input
            className={inputClasses}
            onChange={getEmail}
            type="email"
            id="email"
            value={registrationInfo.email}
            placeholder="email"
            required
          />
        </div>

        {/* password field */}
        <div className="mb-10">
          <label className={labelClasses} htmlFor="password">
            Password
          </label>
          <input
            className={inputClasses}
            onChange={getPassword}
            type="password"
            id="password"
            value={registrationInfo.password}
            placeholder="password"
            required
          />
        </div>

        <ButtonBtn text="Register" modifyClasses="w-full block mb-4" />
        <p className="text-sm text-center">
          Already have an account?{" "}
          <Link className="text-primary font-semibold" to={"/login"}>
            Log In
          </Link>
        </p>
      </form>
    </div>
  );
};

export default RegistrationForm;
