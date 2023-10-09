// shared component imports
import RegistrationForm from "../../shared/RegistrationForm/RegistrationForm";
import SectionHeading from "../../shared/SectionHeading/SectionHeading";

const Registration = () => {
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
