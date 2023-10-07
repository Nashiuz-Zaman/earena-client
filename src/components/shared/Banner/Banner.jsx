// components import
import Carousel from "../Carousel/Carousel";
import BannerText from "../BannerText/BannerText";

// carousel data import
import { carouselImages } from "../../../data/carouselData";

const textObj = {
  heading: (
    <>
      Welcome to the Ultimate <br />{" "}
      <span className="text-primary">eSports</span> Experience!
    </>
  ),
  description: (
    <>
      Elevate your eSports events with our expert event management.
      <br /> We turn your dreams into unforgettable experiences.
    </>
  ),
};

const Banner = () => {
  return (
    <div className="relative">
      <Carousel images={carouselImages} />

      <BannerText textObj={textObj} />
    </div>
  );
};

export default Banner;
