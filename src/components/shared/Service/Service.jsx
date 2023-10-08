// react imports
import PropTypes from "prop-types";
import LinkBtn from "../LinkBtn/LinkBtn";

const Service = ({ serviceObj }) => {
  const { id, name, image, short_description, price } = serviceObj;
  return (
    <div className="flex flex-col group">
      <div className="w-full aspect-video overflow-hidden">
        <img
          className="w-full h-full object-cover group-hover:scale-[1.05] transition-all duration-300"
          src={image}
          alt={`Photo for ${name}`}
        />
      </div>
      <h3 className="font-medium lg:text-xl bg-primary text-white text-center md:text-left md:w-max py-2 px-4 mb-4">
        {name}
      </h3>
      <p className="font-medium mb-4 text-center sm:w-3/4 sm:mx-auto md:text-left md:w-full md:mx-0">
        {short_description}
      </p>

      <div className="mt-auto">
        <p className="font-medium mb-4 text-center md:text-left ">
          Cost: {price}
        </p>
        <LinkBtn
          text="View Details"
          url={`/services/${id}`}
          modifyClasses="w-max mx-auto md:mx-0 "
        />
      </div>
    </div>
  );
};

Service.propTypes = {
  serviceObj: PropTypes.object.isRequired,
};

export default Service;
