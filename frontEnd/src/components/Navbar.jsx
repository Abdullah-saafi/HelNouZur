import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { IoMenu, IoClose } from "react-icons/io5";
import PopupAnime from "../animations/PopupAnime";

const Navbar = () => {
  const [sideBar, setSideBar] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname !== "/") {
      navigate("/");
    }
  }, []);

  const nav = [
    { path: "/", label: "Home" },
    { path: "/need-help", label: "Need Help" },
    { path: "/help-others", label: "Help Others" },
    { path: "/foundations-work", label: "Foundations Works" },
    { path: "/about-us", label: "About Us" },
    { path: "/contact-us", label: "Contact" },
  ];

  return (
    <nav className="primeBg shadow-md px-6 py-3  w-full z-50">
      <div className="Navbar max-w-10xl mx-auto flex justify-between items-center ">
        <div className="logo">
          <NavLink to="/">
            <img src="/imgs/logo.png" alt="Logo" className="h-12 sm:h-16" />
          </NavLink>
        </div>

        <ul className="Navlinks hidden md:flex gap-6 items-center text-lg">
          {nav.map((item, i) => (
            <li key={i} className="font-bold hover:scale-105 transition duration-300">
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive ? "text-white font-bold" : "scondTxt "
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex gap-4 items-center">
          <NavLink
            to="/create-post"
            className="text-red-600  font-bold px-3 py-1 rounded-full border-2 border-red-500 hover:bg-red-600 hover:text-white hover:scale-105 transition duration-300"
          >
            Emergency Help
          </NavLink>
          <NavLink
            to="default-login"
            className="bg-black text-white px-4 py-2 rounded-full font-bold hover:scale-105 transition duration-300"
          >
            Login
          </NavLink>
        </div>

        {!sideBar && (
          <div className="md:hidden scondTxt">
            <IoMenu
              onClick={() => setSideBar(true)}
              className="text-3xl cursor-pointer"
            />
          </div>
        )}
      </div>
      <PopupAnime isVisiable={sideBar}>
        {sideBar && (
          <div className="fixed scondBg top-0 right-0 w-[70%] sm:w-[60%] rounded shadow-lg z-20 flex flex-col p-6 gap-6 md:hidden">
            <div className="flex justify-end text-2xl ">
              <IoClose
                onClick={() => setSideBar(false)}
                className="text-3xl cursor-pointer"
              />
            </div>
            {nav.map((item, i) => (
              <NavLink
                key={i}
                to={item.path}
                onClick={() => setSideBar(false)}
                className={({ isActive }) =>
                  isActive
                    ? "text-white text-lg font-bold"
                    : " text-lg hover:text-white transition"
                }
              >
                {item.label}
              </NavLink>
            ))}
            <div className="sideBtn flex flex-col gap-6">
              <div className="">
                <NavLink
                  to="/emergencyhelp"
                  onClick={() => setSideBar(false)}
                  className=" text-red-600 font-bold px-3 py-1 rounded-full border-2 border-red-500 hover:bg-red-600 hover:text-white hover:scale-105 transition duration-300"
                >
                  Emergency Help
                </NavLink>
              </div>
              <div className="btn">
                <NavLink
                  to="default-login"
                  onClick={() => setSideBar(false)}
                  className="bg-black text-white px-4 py-2 rounded-full font-bold hover:scale-105 transition duration-300"
                >
                  Login
                </NavLink>
              </div>
            </div>
          </div>
        )}
      </PopupAnime>
    </nav >
  );
};

export default Navbar;
