import Navbar from "./Navbar";
import Footer from "./Footer";

const LayoutNavFoot = ({ children }) => {
  return (
    <div className="main">
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}


export default LayoutNavFoot;