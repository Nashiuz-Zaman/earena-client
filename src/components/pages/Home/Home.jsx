// shared component import
import OuterContainer from "../../container/OuterContainer.jsx/OuterContainer";
import Banner from "../../shared/Banner/Banner";
import Header from "../../shared/Header/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <section>
        <OuterContainer>
          <Banner />
        </OuterContainer>
      </section>
    </div>
  );
};

export default Home;
