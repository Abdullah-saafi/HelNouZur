import { FaArrowRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const NeedyLogin = () => {
  return (
    <div className="main">
      <div className="main p-4 md:px-40 md:py-20  bg-[url('/imgs/headerBg.jpg')]  bg-center ">
        <div className="flex flex-col md:flex-row  ">
          <div className="imgs md:flex-1 h-60  md:h-180 overflow-hidden    ">
            <img src="/imgs/loginImg.png" alt="" className="object-cover" />
          </div>
          <div className="content flex-1 bg-[rgb(250,248,245)] p-2">
            <div className="Header flex md:flex-col justify-center mt-5 md:mt-0">
              <div className="logo ">
                <img src="/imgs/logo.png" alt="" className="w-50 md:w-50" />
              </div>
              <div className="heading text-center mt-6 md:mt-0">
                <h4 className="text-sm md:text-2xl font-bold primeTxt">Take a breath. You’ve found a place that listens.
                </h4>
                <h1 className="text-md md:text-5xl mt-2  font-extrabold scondTxt"> HelNurZor a community.</h1>
              </div>
            </div>
            <div className="NeedyLoginForm flex flex-col  gap-2 md:gap-4 mt-2 px-5 md:px-10 md:mt-5">
              <form className="">
                <div className="space-y-4 ">
                  <div>
                    <label htmlFor="username" className="loginLable">
                      User Name
                    </label>
                    <input
                      type="text"
                      name="username"
                      id="username"
                      placeholder="Enter your Username"
                      className={`loginInput`}
                    />
                  </div>

                  <div>
                    <label htmlFor="userpassword" className="loginLable">
                      Password
                    </label>
                    <input
                      type="text"
                      name="userpassword"
                      id="userpassword"
                      placeholder="Your Password"
                      className={`loginInput `}
                    />
                  </div>
                </div>
                <div className="submitBtn text-center flex   justify-between items-center mt-4 md:mt-15">
                  <p className=" text-[10px] md:text-xl font-bold text-red-700 hover:scale-105 transition-all duration-100 ease my-1"> <NavLink to={"/forgot-password"}> Forgot your password?</NavLink> </p>
                  <NavLink to={"/create-post"}>
                    <button
                      type="submit"
                      className=" primeBg cursor-pointer hover:scale-105 transition hover:translate-x-1 duration-300 text-white font-bold text-md md:text-xl rounded-3xl px-8 py-1 md:py-3 "
                    >
                      Login
                    </button>
                  </NavLink>
                </div>
              </form>

            </div>
          </div>
        </div>
      </div >
    </div >
  )
}

export default NeedyLogin