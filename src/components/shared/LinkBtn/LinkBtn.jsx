// react imports
import PropTypes from "prop-types";

// react router imports
import { Link } from "react-router-dom";

const LinkBtn = ({ text, url, outlined = false }) => {
  return (
    <Link
      className={` ${
        outlined
          ? "bg-transparent border border-white text-white hover:bg-[rgba(255,255,255,0.5)]"
          : "bg-primary border border-primary hover:border-primaryLight hover:bg-primaryLight text-white"
      } transition-all duration-300 rounded-default px-4 py-2 text-lg`}
      to={url}
    >
      {text}
    </Link>
  );
};

LinkBtn.propTypes = {
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  outlined: PropTypes.bool,
};

export default LinkBtn;
