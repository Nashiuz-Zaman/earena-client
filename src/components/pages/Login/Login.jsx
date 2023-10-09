// shared component imports
import LoginForm from "../../shared/LoginForm/LoginForm";

// react router dom import
import { Navigate } from "react-router-dom";

// custom hook import
import useAuthContext from "../../../hooks/useAuthContext";

const Login = () => {
  const { user } = useAuthContext();

  if (user) {
    return <Navigate to={"/"} />;
  }

  return (
    <section className="mt-[15rem] mb-sectionGapMd">
      <LoginForm />
    </section>
  );
};

export default Login;
