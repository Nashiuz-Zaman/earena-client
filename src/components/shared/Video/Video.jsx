// react imports
import PropTypes from "prop-types";

const Video = ({ videoSource }) => {
  return (
    <div className="w-full h-full relative">
      <video
        className="w-full h-full object-cover"
        muted
        autoPlay
        loop
        src={videoSource}
      ></video>
      <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-r from-[#000000] to-[#00000000]"></div>
    </div>
  );
};

Video.propTypes = {
  videoSource: PropTypes.string.isRequired,
};

export default Video;
