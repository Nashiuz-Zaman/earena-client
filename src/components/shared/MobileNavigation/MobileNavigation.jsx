// react
import PropTypes from "prop-types";

// components
import { NavLink } from "react-router-dom";
import MobileMenuCloseBtn from "../MobileMenuCloseBtn/MobileMenuCloseBtn";
import LinkBtn from "../LinkBtn/LinkBtn";

const MobileNavigation = ({
  navigationOptions,
  closeNavFunction,
  openState,
}) => {
  return (
    <div
      className={`block lg:hidden h-screen fixed top-0 right-0 w-full translate-x-full transition-all duration-300 z-50 ${
        openState ? "!translate-x-0" : ""
      } text-center p-8 bg-gray-100`}
    >
      <MobileMenuCloseBtn clickHandler={closeNavFunction}></MobileMenuCloseBtn>

      <ul className="flex flex-col gap-8">
        {navigationOptions &&
          navigationOptions.map((option) => {
            return (
              <li key={option.id} onClick={closeNavFunction}>
                <NavLink className="text-lg leading-[normal]" to={option.url}>
                  {option.text}
                </NavLink>
              </li>
            );
          })}
      </ul>
      <LinkBtn
        url="/register"
        text="Sign Up"
        modifyClasses="mt-8 md:w-max md:mx-auto"
      />
    </div>
  );
};

MobileNavigation.propTypes = {
  navigationOptions: PropTypes.array.isRequired,
  closeNavFunction: PropTypes.func.isRequired,
  openState: PropTypes.bool.isRequired,
};

export default MobileNavigation;
