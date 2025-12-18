import { FaHandHoldingWater, FaHome } from "react-icons/fa";
import { MdOutlineHealthAndSafety, MdOutlineSocialDistance, MdFoodBank, MdOutlineCastForEducation } from "react-icons/md";

const WhatCanDo = () => {

  const card = [
    {
      icon: <FaHandHoldingWater />,
      title: "Pure Water",
      descip: "According to late 2025 reports, over half the population—approximately 127 million people—lacks access to safe drinking water in Pakistan.",
      path: "https://tribune.com.pk/story/2582528/half-of-pakistan-lacks-safe-drinking-water",
      lable: "Read More *********"
    },
    {
      icon: <MdOutlineHealthAndSafety />,
      title: "Health Care",
      descip: "Only about 50% of the population has access to essential healthcare services. This means roughly half the country struggles to get basic medical attention when needed.",
      path: "ttps://www.dawn.com/news/1882512",
      lable: "Read More *********"
    },
    {
      icon: <MdOutlineSocialDistance />,
      title: "Social Care",
      descip: "The national poverty rate hovers around 25.6%, but economic shocks have pushed nearly 40% of the aspiring middle class into financial struggle.",
      path: "https://www.dawn.com/news/1860645",
      lable: "Read More *********"
    },
    {
      icon: <MdFoodBank />,
      title: "Healty Food",
      descip: "The situation is critical for children. Approximately 40.2% of children under five are stunted (too short for their age) due to chronic malnutrition.",
      path: "https://www.wfp.org/countries/pakistan",
      lable: "Read More *********"
    },
    {
      icon: <MdOutlineCastForEducation />,
      title: "Primary Education",
      descip: "Poverty is the primary driver. Many families are forced to choose between sending children to school or sending them to work (child labor) to survive inflation.",
      path: "https://www.dawn.com/news/1923454",
      lable: "Read More *********"
    },
    {
      icon: <FaHome />,
      title: "Residence Facilities",
      descip: "Pakistan faces a massive housing shortage of over 12 million units as of early 2025. The demand grows by about 700,000 units every year, but the supply is nowhere near enough.",
      path: "https://www.dawn.com/news/1892676",
      lable: "Read More *********"
    },
  ]

  return (
    <div className="Main lg:flex pt-10 p-4 md:p-20 lg:p-40 gap-6 bg-white">
      <div className="bg-[rgb(242,233,218)] px-10 py-20 my-10 md:my-0">
        <h1 className="text-5xl font-bold"  >What you can Do fot those Who Needed.</h1>
        <p className="lightTxt my-10 text-xl">You can make smiles,Hope and a bright FUture to those who needed.</p>
      </div>
      <div className="cards md:grid grid-cols-3 gap-6">
        {card.map((item, i) => (
          <div className="" key={i} >
            <div className="primeTxt text-4xl  inline-block p-6 bg-[rgb(250,248,245)]">{item.icon}</div>
            <div className="text-3xl font-bold ">{item.title}</div>
            <div className="lightTxt py-3">{item.descip}</div>
            <div className="text-[hsl(41,80%,49%)] text-xl"><a href={item.path} target="blank">{item.lable}</a></div>



          </div>
        ))}
      </div>
    </div >
  )
};


export default WhatCanDo;