// shared component imports
import InnerContainer from "../../container/InnerContainer/InnerContainer";
import Navbar from "../Navbar/Navbar";

// navigation data import
import { navigationOptions } from "./../../../data/navigationOptions";

const Header = () => {
  return (
    <header className="bg-[rgba(0,0,0,0.8)] fixed w-full top-0 left-0 z-50 shadow-md">
      <InnerContainer>
        <Navbar companyName={"EArena"} navigationOptions={navigationOptions} />
      </InnerContainer>
    </header>
  );
};

export default Header;
