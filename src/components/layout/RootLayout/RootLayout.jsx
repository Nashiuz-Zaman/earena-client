// react-router imports
import { Outlet } from "react-router-dom";
import Header from "./../../shared/Header/Header";

// component imports

const RootLayout = () => {
  return (
    <div className="font-poppins text-textPrimary">
      <Header />
      <Outlet />
    </div>
  );
};

export default RootLayout;
