import PropTypes from "prop-types";

const BannerText = ({ textObj }) => {
  const { heading, description } = textObj;

  return (
    <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-30 bg-[rgba(0,0,0,0.8)] p-8 rounded-default text-white text-center w-max backdrop-blur-sm">
      <h1 className="font-semibold text-5xl text-center mb-4 tracking-tight">
        {heading}
      </h1>
      <p className="leading-[1.5] mb-6">{description}</p>
      <button className="bg-primary rounded-default px-4 py-2 text-lg">
        Get Started
      </button>
    </div>
  );
};

BannerText.propTypes = {
  textObj: PropTypes.object.isRequired,
};

export default BannerText;
