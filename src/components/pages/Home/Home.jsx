// shared component import
import OuterContainer from "../../container/OuterContainer.jsx/OuterContainer";
import Banner from "../../shared/Banner/Banner";

const Home = () => {
  return (
    <div>
      <section className="mb-sectionLg">
        <OuterContainer>
          <Banner />
        </OuterContainer>
      </section>
    </div>
  );
};

export default Home;
