import { NavLink } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";

const Footer = () => {
  const nav = [
    { path: "/", label: "Home" },
    { path: "/need-help", label: "Need Help" },
    { path: "/help-others", label: "Help Others" },
    { path: "/foundations-work", label: "Foundations Works" },
    { path: "/about-us", label: "About Us" },
    { path: "/contact-us", label: "Contact" },
  ];
  const navContacts = [
    { path: "mailto:Abdullahsaafipro@gmail.com", label: <MdEmail /> },
    { path: "tel:03132388723", label: <BsFillTelephoneFill /> },
    { path: "https://github.com/Abdullah-saafi", label: <FaGithub size={20} /> },
    { path: "https://www.linkedin.com/in/abdullah-saafi-641a5a305?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", label: <FaLinkedin size={20} /> },
  ];

  const gallery = [
    { img: "/public/imgs/galleryImg1.jpg" },
    { img: "/public/imgs/galleryImg2.jpg" },
    { img: "/public/imgs/galleryImg3.jpg" },
    { img: "/public/imgs/galleryImg4.jpg" },
    { img: "/public/imgs/galleryImg5.jpg" },
    { img: "/public/imgs/galleryImg6.jpg" },


  ]
  return (

    <div className="main bg-black-300 bg-black text-white p-5">
      <div className="heading mb-6  ">
        <h2 className="text-3xl md:text-5xl md:ml-30 font-bold mb-4 scondTxt">Our Aim : <span className="text-lg text-white" >Connecting people with people to bring hope and support to those in need.</span> </h2>
        <p className="text-gray-300">

        </p>
      </div>
      <div className=" px-4 flex flex-col md:flex-row items-center  lg:justify-evenly gap-10 lg:gap-80 ">
        <div className="QuickLinks">
          <h2 className="text-xl font-bold mb-4">Quick Links</h2>
          <ul className="text-gray-300 ">
            {nav.map((item, i) => (
              <li key={i} className="font-bold hover:scale-105 transition duration-300">
                <NavLink
                  to={item.path}
                  className={"lightTxt"}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="Contact  md:my-0">
          <h2 className="text-xl font-bold mb-4">Contact Us</h2>
          <div className="flex space-x-4 mt-4 ">
            <ul className="text-gray-300 flex gap-4 lightTxt">
              {navContacts.map((item, i) => (
                <li key={i} className=" text-xl  font-bold hover:text-[rgb(255,172,0)] hover:scale-105 transition duration-300">
                  <NavLink
                    to={item.path}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="galary w-60 md:w-100">
          <h1 className="text-xl font-bold mb-4">Gallery</h1>
          <div className="grid grid-cols-3 gap-2 ">
            {gallery.map((item, index) => (
              <div key={index}>
                <img src={item.img} />
                <p>{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className=" text-gray-500 mt-10 sm:flex  justify-between md:px-20">
        <p>© 2025 People Helping People. All rights reserved.</p>
        <p className="scondTxt font-bold text-xl">Coded : <span className="hover:text-white"><a href="https://abdullah-portfolio-react.vercel.app/" target="blank">Abdullah-Saafi</a></span></p>
      </div>
    </div >
  )
}


export default Footer;