// react
import PropTypes from "prop-types";

// icon
import { AiOutlineMenu } from "react-icons/ai";

const MobileMenuBtn = ({ openNavFunction }) => {
  return (
    <button className="lg:hidden" onClick={openNavFunction}>
      <AiOutlineMenu className="text-3xl"></AiOutlineMenu>
    </button>
  );
};

MobileMenuBtn.propTypes = {
  openNavFunction: PropTypes.func.isRequired,
};
export default MobileMenuBtn;
