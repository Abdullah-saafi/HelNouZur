import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import NeedHelp from "../pages/NeedHelp";
import HelpOthers from "../pages/HelpOthers";
import FoundationsWork from "../pages/FoundationsWork";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import DefaultLogin from "../pages/DefaultLogin";
import Policies from "../pages/Policies";
import NeedyLogin from "../components/NeedyLogin";
import ForgotPassword from "../components/ForgotPassword";
import CreatePost from "../components/CreatePost";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/need-help" element={<NeedHelp />} />
      <Route path="/help-others" element={<HelpOthers />} />
      <Route path="/foundations-work" element={<FoundationsWork />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/default-login" element={<DefaultLogin />} />
      <Route path="/policies" element={<Policies />} />
      <Route path="/needy-login" element={<NeedyLogin />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/create-post" element={<CreatePost />} />

      CreatePost

    </Routes>
  );
};

export default AppRoutes;
