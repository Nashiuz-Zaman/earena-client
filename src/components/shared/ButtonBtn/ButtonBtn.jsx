// react imports
import PropTypes from "prop-types";

const ButtonBtn = ({
  text,
  onClickFunction,
  outlined = false,
  modifyClasses = "",
}) => {
  return (
    <button
      onClick={onClickFunction}
      className={`${
        outlined
          ? "bg-transparent border border-white text-white hover:bg-[rgba(255,255,255,0.5)]"
          : "bg-primary border border-primary hover:border-primaryLight hover:bg-primaryLight text-white"
      } block transition-all duration-300 rounded-full px-5 py-2 text-lg ${modifyClasses}`}
    >
      {text}
    </button>
  );
};

ButtonBtn.propTypes = {
  text: PropTypes.string.isRequired,
  onClickFunction: PropTypes.func,
  outlined: PropTypes.bool,
  modifyClasses: PropTypes.string,
};

export default ButtonBtn;
