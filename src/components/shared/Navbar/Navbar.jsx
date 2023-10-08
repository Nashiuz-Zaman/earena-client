// react
import PropTypes from "prop-types";

// components
import DesktopNavigation from "./../DesktopNavigation/DesktopNavigation";
import Brandname from "../Brandname/Brandname";
import LinkBtn from "../LinkBtn/LinkBtn";
import MobileMenuBtn from "../MobileMenuBtn/MobileMenuBtn";
import MobileNavigation from "../MobileNavigation/MobileNavigation";

// hooks
import useMobileNavigation from "./../../../hooks/useMobileNavigation";

const Navbar = ({ companyName, navigationOptions }) => {
  // extracting functionality from custom hook
  const { mobileNavOpen, openNav, closeNav } = useMobileNavigation();

  // return jsx
  return (
    <nav className="flex items-center justify-between py-6">
      {/* website logo */}
      <Brandname companyName={companyName} />

      {/* desktop nav */}
      <div className="hidden lg:flex items-center gap-[2rem]">
        <DesktopNavigation navigationOptions={navigationOptions} />
        <LinkBtn url="/register" text="Sign Up" />
      </div>

      {/* mobile nav btn */}
      <MobileMenuBtn openNavFunction={openNav} />

      {/* mobile nav */}
      <MobileNavigation
        openState={mobileNavOpen}
        closeNavFunction={closeNav}
        navigationOptions={navigationOptions}
      />
    </nav>
  );
};

Navbar.propTypes = {
  companyName: PropTypes.string.isRequired,
  navigationOptions: PropTypes.array.isRequired,
};

export default Navbar;
