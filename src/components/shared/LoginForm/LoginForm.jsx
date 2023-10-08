// react import
import { useState } from "react";

// react router import
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [loginInfo, setLoginInfo] = useState({ email: "", password: "" });

  const getEmail = (e) => {
    setLoginInfo({ ...loginInfo, email: e.target.value });
  };

  const getPassword = (e) => {
    setLoginInfo({ ...loginInfo, password: e.target.value });
  };

  return (
    <div>
      <form>
        <div>
          <label htmlFor="email">Email</label>
          <input
            onChange={getEmail}
            type="email"
            id="email"
            value={loginInfo.email}
            placeholder="Email"
            required
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            onChange={getPassword}
            type="password"
            id="password"
            value={loginInfo.password}
            placeholder="Password"
            required
          />
        </div>
        <p>
          Don&apos;t have an account?{" "}
          <Link classname="text-primary">Register</Link>
        </p>

        <button className="bg-primary text-white">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
