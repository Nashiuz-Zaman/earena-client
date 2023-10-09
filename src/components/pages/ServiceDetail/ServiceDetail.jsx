// react router dom imports
import { useLoaderData, useParams } from "react-router-dom";

// shared component imports
import InnerContainer from "../../container/InnerContainer/InnerContainer";
import ServiceHeading from "../../shared/ServiceHeading/ServiceHeading";
import ButtonBtn from "../../shared/ButtonBtn/ButtonBtn";

const ServiceDetail = () => {
  // extract id from url
  const { serviceid } = useParams();
  // convert to number data type
  const serviceidInt = parseInt(serviceid);
  // all services
  const { services } = useLoaderData();
  // current service
  const currentService = services.find((singleService) => {
    return singleService.id === serviceidInt;
  });

  const { name, image, price, detailed_description } = currentService;
  return (
    <div className="mt-sectionGapLg mb-sectionGapMd">
      <InnerContainer>
        <ServiceHeading
          text={name}
          modifyClasses="mb-6 text-center text-2xl md:text-3xl lg:mb-8"
        />

        <div className="lg:grid lg:grid-cols-2 gap-10">
          <div className="w-full aspect-video mb-8">
            <img
              className="w-full h-full object-cover"
              src={image}
              alt={`photo for ${name}`}
            />
          </div>

          <div>
            <p className="text-lg text-center md:text-left mb-8 lg:mb-4 text-textMediumLight">
              <span className="font-semibold text-textPrimary">Price:</span>{" "}
              Starting from {price}
            </p>

            <h4 className="text-center md:text-left text-2xl font-semibold text-primary mb-4">
              What We Offer
            </h4>
            <p className="mb-8">{detailed_description}</p>
            <ButtonBtn text="Get Started" modifyClasses="mx-auto lg:mx-0" />
          </div>
        </div>
      </InnerContainer>
    </div>
  );
};

export default ServiceDetail;
