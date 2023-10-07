// react
import PropTypes from "prop-types";

// components
import { NavLink } from "react-router-dom";

const DesktopNavigation = ({ navigationOptions }) => {
  return (
    <ul className="hidden lg:flex gap-[2rem]">
      {navigationOptions &&
        navigationOptions.map((option) => {
          return (
            <li key={option.id}>
              <NavLink className="leading-[normal]" to={option.url}>
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
