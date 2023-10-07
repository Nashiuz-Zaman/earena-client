// react imports
import PropTypes from "prop-types";

const InnerContainer = ({ children }) => {
  return <div className="max-w-[90rem] mx-auto">{children}</div>;
};

InnerContainer.propTypes = {
  children: PropTypes.node,
};

export default InnerContainer;
