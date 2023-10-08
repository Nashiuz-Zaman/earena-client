// react imports
import PropTypes from "prop-types";

const Video = ({ videoSource }) => {
  return (
    <div className="w-full h-full aspect-video md:aspect-[16/6]">
      <video
        className="w-full h-full object-cover"
        muted
        autoPlay
        loop
        src={videoSource}
      ></video>
    </div>
  );
};

Video.propTypes = {
  videoSource: PropTypes.string.isRequired,
};

export default Video;
