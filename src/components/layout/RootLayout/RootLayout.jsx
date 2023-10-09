// react-router imports
import { Outlet } from "react-router-dom";

// shared component imports
import Header from "./../../shared/Header/Header";
import Footer from "../../shared/Footer/Footer";

// custom hooks import
import useAuthContext from "./../../../hooks/useAuthContext";

// data import
import { socialmediaOptions } from "./../../../data/socialMediaData";
import { navigationOptions } from "./../../../data/navigationOptions";

const RootLayout = () => {
  const { appLoading } = useAuthContext();

  if (!appLoading) {
    return (
      <div className="font-poppins text-textPrimary flex flex-col min-h-screen">
        <Header navigationOptions={navigationOptions} />
        <Outlet />
        <Footer
          footerNavigationOptions={navigationOptions}
          socialMediaOptions={socialmediaOptions}
        />
      </div>
    );
  }
};

export default RootLayout;
