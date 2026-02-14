import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const LayoutNavFoot = () => {
  return (
    <div className="main">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default LayoutNavFoot;
