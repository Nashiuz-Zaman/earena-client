// react imports
import PropTypes from "prop-types";

// react router imports
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const LinkBtn = ({
  text,
  url,
  outlined = false,
  hashed = false,
  modifyClasses = "",
}) => {
  if (hashed) {
    return (
      <HashLink
        className={`${
          outlined
            ? "bg-transparent border border-white text-white hover:bg-[rgba(255,255,255,0.5)]"
            : "bg-primary border border-primary hover:border-primaryLight hover:bg-primaryLight text-white"
        } block transition-all duration-300 rounded-full px-5 py-2 text-lg ${modifyClasses}`}
        to={url}
      >
        {text}
      </HashLink>
    );
  }

  return (
    <Link
      className={`${
        outlined
          ? "bg-transparent border border-white text-white hover:bg-[rgba(255,255,255,0.5)]"
          : "bg-primary border border-primary hover:border-primaryLight hover:bg-primaryLight text-white"
      } block transition-all duration-300 rounded-full px-5 py-2 text-lg ${modifyClasses}`}
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
  hashed: PropTypes.bool,
  modifyClasses: PropTypes.string,
};

export default LinkBtn;
