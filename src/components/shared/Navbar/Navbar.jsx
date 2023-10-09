// react imports
import PropTypes from "prop-types";

// react router imports
import { NavLink } from "react-router-dom";

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

  // return jsx
  return (
    <nav className="flex items-center justify-between py-6">
      {/* website logo */}
      <Brandname companyName={companyName} />

      {/* desktop section */}
      <div className="hidden lg:flex items-center gap-10">
        <DesktopNavigation navigationOptions={navigationOptions} />

        {/* if there is no user show this login and register button */}
        {!user && (
          <div className="flex items-center gap-4">
            <NavLink
              className="text-white hover:text-primaryLight transition-all duration-200"
              to={"/login"}
            >
              Login
            </NavLink>
            <LinkBtn url="/register" text="Register Account" />
          </div>
        )}

        {/* if there is user show logout button and user profile image */}
        {user && (
          <div className="flex items-center gap-4">
            <UsernameWithImage
              username={user && user.displayName}
              profilePicture={user && user.photoURL}
            />
            <ButtonBtn onClickFunction={logOut} text="Log Out" />
          </div>
        )}
      </div>

      {/* mobile section */}

      <div className="flex lg:hidden items-center gap-3">
        {user && (
          <UsernameWithImage
            justImage={true}
            profilePicture={user && user.photoURL}
          />
        )}

        {/* mobile nav btn */}
        <MobileMenuBtn openNavFunction={openNav} />
      </div>

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
