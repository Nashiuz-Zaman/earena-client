// shared component imports
import SectionHeading from "./../../shared/SectionHeading/SectionHeading";
import InnerContainer from "./../../container/InnerContainer/InnerContainer";
import ButtonBtn from "../../shared/ButtonBtn/ButtonBtn";
import Description from "../../shared/Description/Description";

const LiveSupport = () => {
  return (
    <div className="my-sectionGapLg">
      <InnerContainer>
        <SectionHeading
          modifyClasses="text-2xl md:text-3xl mb-6 md:mb-4"
          text={
            <>
              Live Support - <span className="text-primary">Ongoing</span>
            </>
          }
        />

        <Description
          modifyClasses="mb-10 md:w-2/5 mx-auto"
          text="We have live chat support for all of our customers everyday 10-6 except for Sundays. Feel free to drop us a message anytime you need to ask us questions. We're always happy to help."
        />

        <div className="grid md:grid-cols-2 gap-10">
          <img
            className="block md:justify-self-end mx-auto rounded-default"
            src="https://i.ibb.co/rkQXC2K/livesupport.webp"
            alt="live support agent"
          />

          <form className="space-y-6 w-full h-full">
            <textarea
              className="w-full border border-textPrimary h-full p-4 rounded-default"
              placeholder="How can we help today?"
            ></textarea>

            <ButtonBtn text="Send" modifyClasses="mx-auto" />
          </form>
        </div>
      </InnerContainer>
    </div>
  );
};

export default LiveSupport;
