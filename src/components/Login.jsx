import { FaCheck, FaArrowRight } from "react-icons/fa";
import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom";

const Login = () => {
  const [active, setActive] = useState();
  const [BtnTxt, setBtnTxt] = useState("What are you looking for ? ");
  const [goTo, setGoTo] = useState(null);

  const usertype = [
    {
      img: "/imgs/loginneedy.jpg",
      title: "I Need Help",
      desc: "I’m struggling, and I truly needs your supports.",
      status: <FaCheck />,
      route: "/needylogin"
    },
    {
      img: "/imgs/loginhelper.jpg",
      title: "I Want to Help",
      desc: "I want to be there for someone who needs kindness.",
      status: <FaCheck />,
      route: "/need-help"
    },
  ]

  const handleUserBtn = (user) => {
    if (user.title === "I Need Help") {
      setBtnTxt(`Ask for HELP `)
      setGoTo("/need-help")
    } else {
      setBtnTxt("Go for Help")
      setGoTo("/help-others")


    }

  }

  return (
    <div className="main p-4 md:px-40 md:py-20  bg-[url('/imgs/headerBg.jpg')]  bg-center ">
      <div className="flex flex-col md:flex-row  ">
        <div className="imgs md:flex-1 h-60  md:h-180 overflow-hidden    ">
          <img src="/imgs/loginImg.png" alt="" className="object-cover" />
        </div>
        <div className="content flex-1 bg-[rgb(250,248,245)] p-2">
          <div className="mainForm flex justify-center mt-5">
            <div className="logo ">
              <img src="/imgs/logo.png" alt="" className="w-50 md:w-50" />
            </div>
            <div className="heading text-center">
              <h4 className="text-md md:text-3xl font-bold primeTxt">Whether you need a hand or want to be one, you’re not alone.
              </h4>
              <h1 className="text-xl md:text-6xl mt-2  font-extrabold scondTxt"> HelNurZor is with you.</h1>
            </div>
          </div>
          <div className="LoginForm flex flex-col  gap-2 md:gap-4 mt-2  md:mt-15">
            {usertype.map((user, i) => (
              <button onClick={() => handleUserBtn(user, i)} className={` ${active === i ? "border  border-green-800" : ""} flex items-center p-2 boxShadow cursor-pointer`} key={i}>
                <div className=" " >
                  <img src={user.img} alt="" className="w-25 md:w-40 h-full md:h-25" />
                </div>
                <div className="data text-left ml-2 md:ml-5 ">
                  <h1 className="primeTxt md:text-2xl font-extrabold ">{user.title}</h1>
                  <p className="lightTxt text-[10px] md:text-sm">{user.desc}</p>
                </div>
                <div className={`status w-3 md:w-5 h-3 md:h-5 rounded-full  ml-auto text-white text-sm flex items-center justify-center ${active === i ? "bg-green-800 border border-green-800" : "bg-white"}`}>
                  {user.status}
                </div>
              </button>
            ))}
            <div className="submitBtn self-end mt-2 md:mt-15 ">
              <NavLink to={goTo}>
                <button className="primeBg cursor-pointer  hover:scale-103 transition hover:translate-x-1 duration-300  text-white text-[10px] md:text-xl rounded-2xl md:rounded-4xl p-2 md:p-4">{BtnTxt}</button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Login