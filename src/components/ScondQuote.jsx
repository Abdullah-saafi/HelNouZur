import { NavLink } from "react-router-dom";

const ScondQuote = () => {
  return (
    <div className="main bg-[url('/imgs/headerBg.jpg')]  bg-center text-center md:mx-40 py-10 px-6 md:px-50  sm:my-20 ">
      <h1 className="text-2xl md:text-5xl font-bold py-10">Helping one person may not change the world, <br /> but it can change their world.</h1>
      <p className="lightTxt md:text-xl">You cannot reach everyone who needs help.
        Yet reaching one soul with compassion matters deeply.
        That moment can reshape a life.</p>
      <NavLink to="/help-others">
        <button className="scondBg font-bold my-10 py-3 px-8 rounded-3xl  mb-8 text-xl hover:scale-110 transition duration-300 cursor-pointer">
          <p>Start Helps</p>
        </button>
      </NavLink>
    </div>
  )
}


export default ScondQuote;