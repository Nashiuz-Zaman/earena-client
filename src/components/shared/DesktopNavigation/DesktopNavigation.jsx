// react
import PropTypes from "prop-types";

// components
import { NavLink } from "react-router-dom";

const DesktopNavigation = ({ navigationOptions }) => {
  return (
    <ul className="flex gap-4">
      {navigationOptions &&
        navigationOptions.map((option) => {
          return (
            <li key={option.id}>
              <NavLink
                className="leading-[normal] text-white font-medium hover:text-primaryLight transition-all duration-200"
                to={option.url}
              >
                {option.text}
              </NavLink>
            </li>
          );
        })}
    </ul>
  );
};

DesktopNavigation.propTypes = {
  navigationOptions: PropTypes.array.isRequired,
};

export default DesktopNavigation;
