// shared component imports
import RegistrationForm from "../../shared/RegistrationForm/RegistrationForm";
import SectionHeading from "../../shared/SectionHeading/SectionHeading";

// react router dom import
import { Navigate } from "react-router-dom";

// custom hook import
import useAuthContext from "../../../hooks/useAuthContext";

const Registration = () => {
  const { user } = useAuthContext();

  if (user) {
    return <Navigate to={"/"} />;
  }

  return (
    <section className="mt-[10rem] mb-sectionGapMd">
      <SectionHeading
        text={
          <>
            <span className="text-primary">Register</span> - It's free!
          </>
        }
      />
      <RegistrationForm />
    </section>
  );
};

export default Registration;
