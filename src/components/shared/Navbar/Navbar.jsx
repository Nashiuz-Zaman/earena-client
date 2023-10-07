// react
import PropTypes from "prop-types";

// components
import DesktopNavigation from "./../DesktopNavigation/DesktopNavigation";
import Brandname from "../../Brandname/Brandname";
// import MobileNavigation from "./../MobileNavigation/MobileNavigation";
// import MobileMenuBtn from "./../MobileMenuBtn/MobileMenuBtn";

// hooks

const Navbar = ({ companyName, navigationOptions }) => {
  // extracting functionality from custom hook

  // return jsx
  return (
    <nav className="flex items-center justify-between py-8">
      {/* website logo */}
      <Brandname companyName={companyName} />

      {/* desktop nav */}
      <DesktopNavigation navigationOptions={navigationOptions} />
    </nav>
  );
};

Navbar.propTypes = {
  companyName: PropTypes.string.isRequired,
  navigationOptions: PropTypes.array.isRequired,
};

export default Navbar;
