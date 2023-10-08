// react import
import PropTypes from "prop-types";

// react router imports
import { Link } from "react-router-dom";

// shared component imports
import Brandname from "./../Brandname/Brandname";
import InnerContainer from "../../container/InnerContainer/InnerContainer";

const year = new Date().getFullYear();

const Footer = ({ footerNavigationOptions, socialMediaOptions }) => {
  return (
    <footer className="bg-black pt-20 pb-10">
      <InnerContainer>
        <Brandname companyName="EArena" modifyClasses="w-max mx-auto mb-8" />

        {/* footer navigation */}
        <ul className="flex flex-col items-center gap-4 mb-12 md:flex-row md:justify-center md:mb-8">
          {footerNavigationOptions.map((option) => {
            const { id, text, url } = option;
            return (
              <Link
                className="text-white hover:text-primaryLight transition-all duration-200"
                key={id}
                to={url}
              >
                {text}
              </Link>
            );
          })}
        </ul>

        {/* social media heading */}
        <h3 className="text-white text-center mb-6">Follow us on</h3>
        {/* social media logos */}
        <ul className="flex items-center justify-center gap-8 mb-6">
          {socialMediaOptions.map((option) => {
            const { id, image, url, title } = option;

            return (
              <a className="block w-[2rem] aspect-square" key={id} href={url}>
                <img
                  className="w-full h-full object-contain filter-white"
                  src={image}
                  alt={title}
                />
              </a>
            );
          })}
        </ul>

        <p className="text-white text-center">
          <small>&copy; {year} EArena, all rights reserved</small>
        </p>
      </InnerContainer>
    </footer>
  );
};

Footer.propTypes = {
  footerNavigationOptions: PropTypes.array.isRequired,
  socialMediaOptions: PropTypes.array.isRequired,
};

export default Footer;
