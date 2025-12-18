import { Routes, Route } from "react-router-dom";
import LayoutNavFoot from "./components/LayoutHeadFoot.jsx";
import Home from "./pages/Home.jsx";
import NeedHelp from "./pages/NeedHelp.jsx"
import HelpOthers from "./pages/HelpOthers.jsx";
import FoundationsWork from "./pages/FoundationsWork.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import ContactUs from "./pages/ContactUs.jsx";

function App() {
  return (
    <LayoutNavFoot>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/need-help" element={<NeedHelp />} />
        <Route path="/help-others" element={<HelpOthers />} />
        <Route path="/foundations-work" element={<FoundationsWork />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />


      </Routes>
    </LayoutNavFoot>
  );
}

export default App;
