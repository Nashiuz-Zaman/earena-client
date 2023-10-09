//  shared component imports
import SectionHeading from "../../shared/SectionHeading/SectionHeading";
import InnerContainer from "./../../container/InnerContainer/InnerContainer";

// data import
import { aboutUsDescription } from "../../../data/aboutusData";

const AboutUs = () => {
  return (
    <div className="my-sectionGapLg">
      <InnerContainer>
        <SectionHeading
          modifyClasses="mb-6"
          text={
            <>
              Meet Our <span className="text-primary">Team</span>
            </>
          }
        />

        <img
          className="w-full lg:w-3/4 mx-auto mb-12"
          src="https://i.ibb.co/xqKdztW/team.webp"
          alt="EArena Team Members"
        />

        <SectionHeading
          modifyClasses="mb-5"
          text={
            <>
              Who <span className="text-primary">We</span> Are
            </>
          }
        />

        <div className="space-y-4 w-full lg:w-3/4 mx-auto">
          {aboutUsDescription.map((text, i) => {
            return <p key={i}>{text.text}</p>;
          })}
        </div>
      </InnerContainer>
    </div>
  );
};

export default AboutUs;
