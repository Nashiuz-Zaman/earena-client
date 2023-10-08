// react imports
// react import
import PropTypes from "prop-types";

// shared component imports
import InnerContainer from "../../container/InnerContainer/InnerContainer";
import Navbar from "../Navbar/Navbar";

const Header = ({ navigationOptions }) => {
  return (
    <header className="bg-[rgba(0,0,0,0.8)] fixed w-full top-0 left-0 z-50 shadow-md backdrop-blur-sm">
      <InnerContainer>
        <Navbar companyName={"EArena"} navigationOptions={navigationOptions} />
      </InnerContainer>
    </header>
  );
};

Header.propTypes = {
  navigationOptions: PropTypes.array.isRequired,
};

export default Header;
