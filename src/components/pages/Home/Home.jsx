// react router imports
import { useLoaderData } from "react-router-dom";

// shared component import
import InnerContainer from "../../container/InnerContainer/InnerContainer";
import OuterContainer from "../../container/OuterContainer.jsx/OuterContainer";
import Banner from "../../shared/Banner/Banner";
import Description from "../../shared/Description/Description";
import SectionHeading from "../../shared/SectionHeading/SectionHeading";
import Services from "../../shared/Services/Services";

const Home = () => {
  // loaded data from loader
  const { services } = useLoaderData();

  // service section heading
  const serviceSectionHeading = (
    <>
      <span className="text-primary">What</span> We Do
    </>
  );

  // service section description
  const serviceSectionDescription =
    "We excel at managing esports events. From planning and logistics to promotion and execution, our expertise ensures your event's success.";

  return (
    <div>
      {/* banner section */}
      <section className="mb-sectionLg">
        <OuterContainer>
          <Banner />
        </OuterContainer>
      </section>

      {/* services section */}
      <section id="our-services" className="scroll-m-[10rem]">
        <InnerContainer>
          <SectionHeading
            modifyClasses="mb-elementGapSm"
            text={serviceSectionHeading}
          />
          <Description
            text={serviceSectionDescription}
            modifyClasses="lg:w-1/2 mx-auto mb-elementGapMd"
          />
          <Services services={services} />
        </InnerContainer>
      </section>
    </div>
  );
};

export default Home;
