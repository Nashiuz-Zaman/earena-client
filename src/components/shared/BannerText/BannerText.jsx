import PropTypes from "prop-types";
import LinkBtn from "../LinkBtn/LinkBtn";

const BannerText = ({ textObj }) => {
  const { heading, description } = textObj;

  return (
    <div className="static md:absolute md:top-1/2 md:left-1/2 md:-translate-y-1/2 md:-translate-x-1/2 md:z-30 bg-black md:bg-[rgba(0,0,0,0.8)] p-8 md:rounded-default text-white text-center w-full md:w-max backdrop-blur-sm">
      <h1 className="font-semibold text-3xl md:text-5xl text-center mb-4 tracking-tight">
        {heading}
      </h1>
      <p className="leading-[1.5] text-sm mb-6">{description}</p>
      <div className="flex flex-col xsm:flex-row items-center justify-center gap-4">
        <LinkBtn text="Explore Services" hashed={true} />
        <LinkBtn outlined={true} text="Sign up - It's free!" url="/register" />
      </div>
    </div>
  );
};

BannerText.propTypes = {
  textObj: PropTypes.object.isRequired,
};

export default BannerText;
