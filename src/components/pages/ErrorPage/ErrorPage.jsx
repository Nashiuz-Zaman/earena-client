import LinkBtn from "../../shared/LinkBtn/LinkBtn";

const ErrorPage = () => {
  return (
    <div className="my-sectionGapLg">
      <p className="text-center text-3xl font-semibold">
        Oops we have hit a dead end!
      </p>
      <LinkBtn text="Go to Home" url="/" modifyClasses="w-max mx-auto mt-8" />
    </div>
  );
};

export default ErrorPage;
