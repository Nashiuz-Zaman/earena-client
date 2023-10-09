// react router dom import
import { Navigate } from "react-router-dom";

// shared component imports
import RegistrationForm from "../../shared/RegistrationForm/RegistrationForm";
import SectionHeading from "../../shared/SectionHeading/SectionHeading";

// custom hook import
import useAuthContext from "../../../hooks/useAuthContext";

const Registration = () => {
  const { user } = useAuthContext();

  if (user) {
    return <Navigate to={"/"} />;
  }

  return (
    <section className="mt-[12rem] mb-sectionGapMd">
      <SectionHeading
        modifyClasses="mb-4"
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
