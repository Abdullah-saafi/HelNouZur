import { FaArrowRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";


const NeedySignup = () => {



  return (
    <div className="main">
      <div className="main p-4 md:px-40 md:py-20  bg-[url('/imgs/headerBg.jpg')]  bg-center ">
        <div className="flex flex-col md:flex-row  ">
          <div className="imgs md:flex-1 h-60  md:h-180 overflow-hidden    ">
            <img src="/imgs/loginImg.png" alt="" className="object-cover" />
          </div>
          <div className="content flex-1 bg-[rgb(250,248,245)] p-2">
            <div className="Header flex justify-center mt-5">
              <div className="logo ">
                <img src="/imgs/logo.png" alt="" className="w-50 md:w-50" />
              </div>
              <div className="heading text-center mt-6 md:mt-10">
                <h4 className="text-sm md:text-2xl font-bold primeTxt">Take a breath. You’ve found a place that listens.
                </h4>
                <h1 className="text-md md:text-5xl mt-2  font-extrabold scondTxt"> HelNurZor a community.</h1>
              </div>
            </div>
            <div className="NeedyLoginForm flex flex-col  gap-2 md:gap-4 mt-2 px-5 md:px-10">
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="fName" className="loginLable">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="fName"
                      id="fName"
                      placeholder="First Name"
                      className={`loginInput`}
                    />
                  </div>

                  <div>
                    <label htmlFor="sName" className="loginLable">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="sName"
                      id="sName"
                      placeholder="Last Name"
                      className={`loginInput `}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="age" className="loginLable">
                      Age
                    </label>
                    <input
                      type="number"
                      name="age"
                      id="age"
                      placeholder="Ex: 27"
                      min="1"
                      max="120"
                      className={`loginInput`}
                    />
                  </div>

                  <div>
                    <label htmlFor="gender" className="loginLable">
                      Gender
                    </label>
                    <select
                      name="gender"
                      id="gender"
                      className={`loginInput`}
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="loginLable">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Enter your email"
                      className={`loginInput`}
                    />
                  </div>

                  <div>
                    <label htmlFor="tel" className="loginLable">
                      Contact No
                    </label>
                    <input
                      type="tel"
                      name="tel"
                      id="tel"
                      placeholder="Enter your phone number"
                      className={`loginInput`}
                    />
                  </div>
                </div>
                <div className="space-y-3 pt-2">
                  <label className={`flex items-start gap-2 cursor-pointer text-sm `}>
                    <input
                      type="checkbox"
                      name="policy"
                      id="policy"
                      className="mt-1 w-4 h-4"
                    />
                    <span>
                      I agree to the <NavLink to={"/policies"} ><span className="primeTxt hover:underline font-semibold">Terms of Service</span ></NavLink>  and
                      <NavLink to={"/policies"} ><span className="primeTxt hover:underline font-semibold">Privacy Policy</span ></NavLink>
                    </span>
                  </label>
                  <label className={`flex items-start gap-2 cursor-pointer text-sm `}>
                    <input
                      type="checkbox"
                      name="confirmation"
                      id="confirmation"
                      className="mt-1 w-4 h-4"
                    />
                    <span>I confirm that the information I've shared is honest and true.</span>
                  </label>
                </div>

                <div className="submitBtn pt-4">
                  <NavLink to={"/create-post"}>
                    <button
                      type="submit"
                      className="w-full primeBg cursor-pointer hover:scale-105 transition hover:translate-x-1 duration-300 text-white font-bold text-sm md:text-lg rounded-3xl p-3 md:p-4 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      Ask for Help
                      <FaArrowRight />
                    </button>
                  </NavLink>
                </div>
              </form>

            </div>
            <div className="alreadyAccount text-center">
              <p className="text-md py-2">Already part of our community ? <span className="primeTxt font-bold text-xl hover:border-b-2 border-rgb(26,104,91) transition-all duration-100 ease   "><NavLink to={"/needy-login"}>Sign in</NavLink></span> </p>
              <p className="text-md font-bold text-red-700 hover:scale-105 transition-all duration-100 ease "> <NavLink to={"/forgot-password"}> Forgot your password?</NavLink> </p>
            </div>
          </div>
        </div>
      </div >
    </div >
  )
};

export default NeedySignup;