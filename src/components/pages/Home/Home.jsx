// react router imports
import { useLoaderData } from "react-router-dom";

// shared component import
import InnerContainer from "./../../container/InnerContainer/InnerContainer";
import OuterContainer from "./../../container/OuterContainer.jsx/OuterContainer";
import Banner from "./../../shared/Banner/Banner";
import Description from "./../../shared/Description/Description";
import SectionHeading from "./../../shared/SectionHeading/SectionHeading";
import Services from "./../../shared/Services/Services";
import Video from "../../shared/Video/Video";
import ClipDesign from "./../../shared/ClipDesign/ClipDesign";
import FeaturedIn from "../../shared/FeaturedIn/FeaturedIn";

// video data import
import upcomingVideo from "./../../../assets/video/upcoming.mp4";

// featured data import
import { featuredData } from "../../../data/featuredInData";

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

  // upcoming events heading
  const upcomingEventsSectionHeading = (
    <>
      <span className="text-primary">Upcoming</span> Events
    </>
  );

  // service section heading
  const featuredSectionHeading = (
    <>
      <span className="text-primary">Featured</span> In
    </>
  );

  return (
    <div>
      {/* banner section */}
      <section className="mb-sectionGapLg">
        <OuterContainer>
          <Banner />
        </OuterContainer>
      </section>

      {/* services section */}
      <section id="our-services" className="scroll-m-[10rem] mb-sectionGapLg">
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

      {/* upcoming events section */}
      <section className="mb-sectionGapLg">
        <OuterContainer>
          <SectionHeading
            modifyClasses="mb-elementGapSm md:mb-0"
            text={upcomingEventsSectionHeading}
          />

          <div className="relative py-0 md:py-10 lg:py-14">
            <InnerContainer>
              <Video videoSource={upcomingVideo} />
            </InnerContainer>
            <ClipDesign modifyClasses="hidden md:block" />
          </div>
        </OuterContainer>
      </section>

      {/* featured in  */}
      <section className="mb-sectionGapLg">
        <SectionHeading
          modifyClasses="mb-elementGapMd"
          text={featuredSectionHeading}
        />
        <InnerContainer>
          <FeaturedIn logos={featuredData} />
        </InnerContainer>
      </section>
    </div>
  );
};

export default Home;
