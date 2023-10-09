// react imports
import PropTypes from "prop-types";

const ServiceHeading = ({ text, modifyClasses = "" }) => {
  return <h3 className={`font-semibold text-3xl ${modifyClasses}`}>{text}</h3>;
};

ServiceHeading.propTypes = {
  text: PropTypes.string.isRequired,
  modifyClasses: PropTypes.string,
};

export default ServiceHeading;
