// shared component imports
import InnerContainer from "../../container/InnerContainer/InnerContainer";
import Navbar from "../Navbar/Navbar";

// navigation data import
import { navigationOptions } from "./../../../data/navigationOptions";

const Header = () => {
  return (
    <header className="bg-[#eee]">
      <InnerContainer>
        <Navbar companyName={"EArena"} navigationOptions={navigationOptions} />
      </InnerContainer>
    </header>
  );
};

export default Header;
