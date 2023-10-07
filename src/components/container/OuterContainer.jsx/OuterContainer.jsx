// react imports
import PropTypes from "prop-types";

const OuterContainer = ({ children }) => {
  return <div className="max-w-[120rem] mx-auto">{children}</div>;
};

OuterContainer.propTypes = {
  children: PropTypes.node,
};

export default OuterContainer;
