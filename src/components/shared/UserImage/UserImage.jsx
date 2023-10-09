// react imports
import PropTypes from "prop-types";

//  react icon import
import { FaUserCircle } from "react-icons/fa";

const UserImage = ({ profilePicture = null }) => {
  return (
    <div className="w-[2.5rem] aspect-square rounded-full overflow-hidden">
      {!profilePicture && (
        <FaUserCircle className="w-full h-full object-contain text-white"></FaUserCircle>
      )}
      {profilePicture !== null && <img src={profilePicture} alt="user image" />}
    </div>
  );
};

UserImage.propTypes = {
  profilePicture: PropTypes.string,
};

export default UserImage;
