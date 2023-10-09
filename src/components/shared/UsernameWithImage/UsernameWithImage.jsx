// react imports
import PropTypes from "prop-types";

//  react icon import
import { FaUserCircle } from "react-icons/fa";

const UsernameWithImage = ({
  username = "Unknown user",
  profilePicture = null,
  justImage = false,
}) => {
  if (justImage) {
    return (
      <div className="w-[2.5rem] aspect-square rounded-full overflow-hidden">
        {!profilePicture && (
          <FaUserCircle className="w-full h-full object-contain text-white"></FaUserCircle>
        )}
        {profilePicture !== null && (
          <img src={profilePicture} alt="user image" />
        )}
      </div>
    );
  }

  return (
    <div className="flex items-center gap-4">
      <p className="text-white">{username}</p>
      <div className="w-[2.5rem] aspect-square rounded-full overflow-hidden">
        {!profilePicture && (
          <FaUserCircle className="w-full h-full object-contain text-white"></FaUserCircle>
        )}
        {profilePicture !== null && (
          <img src={profilePicture} alt="user image" />
        )}
      </div>
    </div>
  );
};

UsernameWithImage.propTypes = {
  username: PropTypes.string,
  profilePicture: PropTypes.string,
  justImage: PropTypes.bool,
};

export default UsernameWithImage;
