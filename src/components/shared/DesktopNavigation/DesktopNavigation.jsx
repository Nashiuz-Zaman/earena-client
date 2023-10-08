// react
import PropTypes from "prop-types";

// components
import { NavLink } from "react-router-dom";

const DesktopNavigation = ({ navigationOptions }) => {
  return (
    <ul className="flex gap-[1.5rem]">
      {navigationOptions &&
        navigationOptions.map((option) => {
          return (
            <li key={option.id}>
              <NavLink
                className="leading-[normal] hover:text-primary transition-all duration-300"
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
