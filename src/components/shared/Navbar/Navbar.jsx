// react imports
import PropTypes from "prop-types";

// react router imports
import { Link } from "react-router-dom";

// components
import DesktopNavigation from "./../DesktopNavigation/DesktopNavigation";
import Brandname from "../Brandname/Brandname";
import LinkBtn from "../LinkBtn/LinkBtn";
import MobileMenuBtn from "../MobileMenuBtn/MobileMenuBtn";
import MobileNavigation from "../MobileNavigation/MobileNavigation";
import ButtonBtn from "../ButtonBtn/ButtonBtn";
import UsernameWithImage from "../UsernameWithImage/UsernameWithImage";

// hooks
import useMobileNavigation from "./../../../hooks/useMobileNavigation";
import useAuthContext from "../../../hooks/useAuthContext";

// component starts here
const Navbar = ({ companyName, navigationOptions }) => {
  // extracting functionality from custom hook
  const { mobileNavOpen, openNav, closeNav } = useMobileNavigation();

  // extract user information from auth context
  const { user, logOut } = useAuthContext();

  console.log(user);
  // return jsx
  return (
    <nav className="flex items-center justify-between py-6">
      {/* website logo */}
      <Brandname companyName={companyName} />

      {/* desktop nav */}
      <div className="hidden lg:flex items-center gap-10">
        <DesktopNavigation navigationOptions={navigationOptions} />

        {/* if there is no user show this login and register button */}
        {!user && (
          <div className="flex items-center gap-4">
            <Link
              className="text-white hover:text-primaryLight transition-all duration-200"
              to={"/login"}
            >
              Login
            </Link>
            <LinkBtn url="/register" text="Register Account" />
          </div>
        )}

        {/* if there is user show logout button and user profile image */}
        {user && (
          <div className="flex items-center gap-4">
            <UsernameWithImage />
            <ButtonBtn onClickFunction={logOut} text="Log Out" />
          </div>
        )}
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
