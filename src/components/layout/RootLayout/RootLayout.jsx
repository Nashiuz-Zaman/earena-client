// react-router imports
import { Outlet } from "react-router-dom";

// component imports

const RootLayout = () => {
  return (
    <div className="font-poppins">
      <Outlet />
    </div>
  );
};

export default RootLayout;
