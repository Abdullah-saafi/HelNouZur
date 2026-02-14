import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";


const Quote = ({ scollTxt = true }) => {
  return (
    <div className="main scondBg px-2 sm:px-4 py-8 text-center text-xl md:text-4xl flex sm:justify-center items-center">
      <div className="head">
        <h1>Together, we can build a world where everyone has the chance to thrive.</h1>
      </div>
      {scollTxt && (
        <div className="rotate-90 text-sm primeBg text-white w-100 sm:w-31 sm:h-15 flex justify-center items-center text-center">
          <p className="flex items-center">Scroll down <span className="text-2xl"> <MdOutlineKeyboardDoubleArrowRight /></span></p>
        </div>)}
    </div>
  )
}



export default Quote;