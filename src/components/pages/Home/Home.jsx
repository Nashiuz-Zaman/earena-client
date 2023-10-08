// shared component import
import InnerContainer from "../../container/InnerContainer/InnerContainer";
import OuterContainer from "../../container/OuterContainer.jsx/OuterContainer";
import Banner from "../../shared/Banner/Banner";
import Description from "../../shared/Description/Description";
import SectionHeading from "../../shared/SectionHeading/SectionHeading";

const Home = () => {
  const serviceSectionHeading = (
    <>
      <span className="text-primary">What</span> We Do
    </>
  );

  const serviceSectionDescription =
    "We excel at managing esports events. From planning and logistics to promotion and execution, our expertise ensures your event's success.";

  return (
    <div>
      <section className="mb-sectionLg">
        <OuterContainer>
          <Banner />
        </OuterContainer>
      </section>

      <section>
        <InnerContainer>
          <SectionHeading
            modifyClasses="mb-elementGapSm"
            text={serviceSectionHeading}
          />
          <Description
            text={serviceSectionDescription}
            modifyClasses="w-1/2 mx-auto mb-elementGapMd"
          />
        </InnerContainer>
      </section>
    </div>
  );
};

export default Home;
