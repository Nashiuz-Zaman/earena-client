// components import
import Carousel from "../Carousel/Carousel";

// carousel data import
import { carouselImages } from "../../../data/carouselData";

const Banner = () => {
  return (
    <div>
      <Carousel images={carouselImages} />
    </div>
  );
};

export default Banner;
