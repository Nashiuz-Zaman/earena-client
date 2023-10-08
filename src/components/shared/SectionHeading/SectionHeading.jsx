// react imports
import PropTypes from "prop-types";

const SectionHeading = ({ text, modifyClasses = "" }) => {
  return (
    <h2 className={`text-3xl text-center font-semibold ${modifyClasses}`}>
      {text}
    </h2>
  );
};

SectionHeading.propTypes = {
  text: PropTypes.string.isRequired,
  modifyClasses: PropTypes.string,
};

export default SectionHeading;
