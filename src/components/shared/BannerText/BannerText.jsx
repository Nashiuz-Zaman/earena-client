import PropTypes from "prop-types";

const BannerText = ({ textObj }) => {
  const { heading, description } = textObj;

  return (
    <div>
      <p>Welcome</p>
      <h1>{heading}</h1>
      <p>{description}</p>
    </div>
  );
};

BannerText.propTypes = {
  textObj: PropTypes.object.isRequired,
};

export default BannerText;
