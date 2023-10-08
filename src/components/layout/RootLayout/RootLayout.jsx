// react-router imports
import { Outlet } from "react-router-dom";

// shared component imports
import Header from "./../../shared/Header/Header";
import Footer from "../../shared/Footer/Footer";

// data import
import { socialmediaOptions } from "./../../../data/socialMediaData";
import { navigationOptions } from "./../../../data/navigationOptions";

const RootLayout = () => {
  return (
    <div className="font-poppins text-textPrimary">
      <Header navigationOptions={navigationOptions} />
      <Outlet />
      <Footer
        footerNavigationOptions={navigationOptions}
        socialMediaOptions={socialmediaOptions}
      />
    </div>
  );
};

export default RootLayout;
