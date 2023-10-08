// react import
import { useState } from "react";

// react router import
import { Link } from "react-router-dom";

// shared component imports
import ButtonBtn from "./../ButtonBtn/ButtonBtn";

const LoginForm = () => {
  // states of the form input boxes
  const [loginInfo, setLoginInfo] = useState({ email: "", password: "" });

  // on change run this function for email field
  const getEmail = (e) => {
    setLoginInfo({ ...loginInfo, email: e.target.value });
  };

  // on change run this function for password field
  const getPassword = (e) => {
    setLoginInfo({ ...loginInfo, password: e.target.value });
  };

  const labelClasses = "block mb-2 text-sm";

  const inputClasses =
    "block w-full rounded-default border border-textLight py-2 px-2";

  console.log(loginInfo);
  return (
    <div>
      <form className="w-full md:w-[20rem] mx-auto p-4">
        <div className="mb-4">
          <label className={labelClasses} htmlFor="email">
            Email
          </label>
          <input
            className={inputClasses}
            onChange={getEmail}
            type="email"
            id="email"
            value={loginInfo.email}
            placeholder="email"
            required
          />
        </div>

        <div className="mb-10">
          <label className={labelClasses} htmlFor="password">
            Password
          </label>
          <input
            className={inputClasses}
            onChange={getPassword}
            type="password"
            id="password"
            value={loginInfo.password}
            placeholder="password"
            required
          />
        </div>

        <ButtonBtn text="Log In" modifyClasses="w-full block mb-4" />
        <p className="text-sm text-center">
          Don&apos;t have an account?{" "}
          <Link className="text-primary font-semibold" to={"/register"}>
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
