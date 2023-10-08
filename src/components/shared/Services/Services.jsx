// react imports
import PropTypes from "prop-types";

// shared component imports
import Service from "../Service/Service";

const Services = ({ services }) => {
  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-14 md:gap-x-10">
      {services &&
        services.map((service) => {
          return <Service key={service.id} serviceObj={service} />;
        })}
    </div>
  );
};

Services.propTypes = {
  services: PropTypes.array.isRequired,
};

export default Services;
