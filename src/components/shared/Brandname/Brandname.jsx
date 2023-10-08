// react imports
import PropTypes from "prop-types";

// react-router imports
import { Link } from "react-router-dom";
import { SiGamemaker } from "react-icons/si";

const Brandname = ({ companyName, modifyClasses = "" }) => {
  return (
    <div
      className={`bg-primary py-2 px-4 flex items-center gap-2 ${modifyClasses}`}
    >
      <SiGamemaker className="text-white text-xl" />
      <Link className="text-white font-medium text-xl" to="/">
        {companyName}
      </Link>
    </div>
  );
};

Brandname.propTypes = {
  companyName: PropTypes.string.isRequired,
  modifyClasses: PropTypes.string,
};

export default Brandname;
