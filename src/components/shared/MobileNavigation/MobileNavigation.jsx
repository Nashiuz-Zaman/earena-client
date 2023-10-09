// react
import PropTypes from "prop-types";

// components
import { NavLink } from "react-router-dom";
import MobileMenuCloseBtn from "../MobileMenuCloseBtn/MobileMenuCloseBtn";
import LinkBtn from "../LinkBtn/LinkBtn";
import Brandname from "../Brandname/Brandname";

// custom hooks import
import useAuthContext from "../../../hooks/useAuthContext";
import ButtonBtn from "../ButtonBtn/ButtonBtn";

const MobileNavigation = ({
  navigationOptions,
  closeNavFunction,
  openState,
}) => {
  // extract user state for conditional rendering of login and logout buttons and also the logout function for logging out the user from mobile nav
  const { user, logOut } = useAuthContext();

  return (
    <div
      className={`block lg:hidden h-screen fixed top-0 right-0 w-full translate-x-full transition-all duration-300 z-60 ${
        openState ? "!translate-x-0" : ""
      } text-center p-8 bg-gray-100`}
    >
      <MobileMenuCloseBtn clickHandler={closeNavFunction}></MobileMenuCloseBtn>

      <Brandname
        companyName="EArena"
        modifyClasses="block w-max mx-auto mb-8"
      />

      {/* regular part */}
      <ul className="flex flex-col gap-6 mb-14">
        {navigationOptions &&
          navigationOptions.map((option) => {
            return (
              <li key={option.id} onClick={closeNavFunction}>
                <NavLink className=" leading-[normal]" to={option.url}>
                  {option.text}
                </NavLink>
              </li>
            );
          })}
      </ul>

      {/* conditonal rendering part */}
      {!user && (
        <div className="flex flex-col space-y-6 items-center">
          <NavLink onClick={closeNavFunction} to="/login">
            Login
          </NavLink>

          <div onClick={closeNavFunction}>
            <LinkBtn
              url="/register"
              text="Register Account"
              modifyClasses="md:w-max md:mx-auto"
            />
          </div>
        </div>
      )}

      {user && (
        <div className="space-y-6">
          <h4>Logged In as:</h4>
          <p className="text-xl text-primary font-semibold">
            {user.displayName || "Unknown User"}
          </p>

          <ButtonBtn
            onClickFunction={logOut}
            text="Log Out"
            modifyClasses="mx-auto"
          />
        </div>
      )}
    </div>
  );
};

MobileNavigation.propTypes = {
  navigationOptions: PropTypes.array.isRequired,
  closeNavFunction: PropTypes.func.isRequired,
  openState: PropTypes.bool.isRequired,
};

export default MobileNavigation;
