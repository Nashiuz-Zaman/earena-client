// react
import PropTypes from "prop-types";

// components
import { NavLink } from "react-router-dom";
import MobileMenuCloseBtn from "../MobileMenuCloseBtn/MobileMenuCloseBtn";

const MobileNavigation = ({ navigationOptions, closeNavFunc, openState }) => {
  return (
    <div
      className={`block lg:hidden h-screen fixed top-0 right-0 w-full -translate-y-full transition-all duration-300 z-50 ${
        openState ? "!translate-y-0" : ""
      } text-center p-8 bg-gray-100`}
    >
      <MobileMenuCloseBtn clickHandler={closeNavFunc}></MobileMenuCloseBtn>

      <ul className="flex flex-col gap-[2rem]">
        {navigationOptions &&
          navigationOptions.map((option) => {
            return (
              <li key={option.id} onClick={closeNavFunc}>
                <NavLink className="text-lg leading-[normal]" to={option.url}>
                  {option.text}
                </NavLink>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

MobileNavigation.propTypes = {
  navigationOptions: PropTypes.array.isRequired,
  closeNavFunc: PropTypes.func.isRequired,
  openState: PropTypes.bool.isRequired,
};

export default MobileNavigation;
