// react router dom import
import { Navigate, useLocation } from "react-router-dom";

// shared component imports
import LoginForm from "../../shared/LoginForm/LoginForm";
import SectionHeading from "../../shared/SectionHeading/SectionHeading";

// custom hook import
import useAuthContext from "../../../hooks/useAuthContext";

const Login = () => {
  // extract user state from context
  const { user } = useAuthContext();
  const { state } = useLocation();

  if (user && !state) {
    return <Navigate to={"/"} />;
  }

  return (
    <section className="mt-[12rem] mb-sectionGapMd">
      <SectionHeading
        modifyClasses="mb-4"
        text={
          <>
            <span className="text-primary">Log In</span> To Your Account
          </>
        }
      />
      <LoginForm />
    </section>
  );
};

export default Login;
