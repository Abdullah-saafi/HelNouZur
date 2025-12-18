import { BsFillCalendarDateFill } from "react-icons/bs";
import { IoLocation } from "react-icons/io5";

const FoundationsEve = () => {
  const cards = [
    {
      img: "/imgs/eventImg1.jpg",
      title: "TCF Rahbar (Mentorship Program)",
      link: "https://www.tcf.org.pk/volunteer-programmes/apply-rahbar/",
      decri:
        "You mentor 8th and 9th-grade students to help them gain confidence and plan their future. It requires a commitment of several Saturdays.",
      dateIcon: <BsFillCalendarDateFill />,
      date: "Jan-2026",
      locationIcon: <IoLocation />,
      locations: "Karachi, Lahore, Islamabad, and Rawalpindi",
    },
    {
      img: "/imgs/eventimg2.jpg",
      title: "Edhi Foundation",
      link: "https://www.edhi.org/",
      decri:
        "Honorary Volunteers help with fundraising, ambulance coordination, and managing donations.The Edhi Foundation does not have a direct Registration",
      dateIcon: < BsFillCalendarDateFill />,
      date: "Any Time",
      locationIcon: <IoLocation />,
      locations: "Throught-out PAKISTAN",
    },
    {
      img: "/imgs/eventimg3.jpg",
      title: "Al-Khidmat Females in Service",
      link: "https://volunteer.alkhidmat.org/volunteer-registration/new",
      decri:
        "A volunteer initiative specifically for women to help with community services, packing drives, and awareness sessions.",
      dateIcon: <BsFillCalendarDateFill />,
      date: "Dec 2025",
      locationIcon: <IoLocation />,
      locations: "Karachi",
    },
  ];

  return (
    <div className="main p-8 md:px-20 my-10 md:my-20 ">
      <h1 className="text-center md:text-5xl font-bold my-10">
        Be part of the helping hands supporting these foundations <br /> and help make
        the world more beautiful.
      </h1>

      <div className="div md:grid grid-cols-3 gap-10 md:p-10 bg-white">
        {cards.map((item, index) => (
          <div key={index} className="card flex flex-col shadow-md rounded-lg p-6 md:p-10 hover:shadow-2xl hover:-translate-y-1 transition transform duration-300">
            <img src={item.img} alt={item.title} className="card-img sm:h-70 w-auto" />

            <h2 className="text-xl md:text-2xl font-bold py-6 hover:text-[rgb(255,172,0)] ransform duration-300"><a href={item.link} target="_blank" rel="noreferrer">{item.title}</a></h2>
            <p className="lightTxt ">{item.decri}</p>

            <div className="info bg-[rgb(253,242,221)] p-5 flex flex-col gap-2 lightTxt justify-self-end my-5">
              <p className="flex items-center gap-2 " >
                <span className="scondTxt">{item.dateIcon}</span>
                {item.date}
              </p>

              <p className="flex items-center gap-2">
                <span className="scondTxt">{item.locationIcon}</span>
                {item.locations}
              </p>

              <p className="scondTxt">
                <a href={item.link} target="_blank" rel="noreferrer">
                  Learn More
                </a>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoundationsEve;
