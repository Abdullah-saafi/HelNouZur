import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Quote from "../components/Quote";

const AboutUs = () => {
  const headings = ["About US", "Oppss Sorry", "Actually It's .....", "About ME"];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => {
        if (prev < headings.length - 1) {
          return prev + 1;
        } else {
          clearInterval(interval); // stop interval
          return prev;
        }
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const itemVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, } },
    exit: { opacity: 0, x: -100, transition: { duration: 0.5 } },
  };

  return (
    <div className="main ">
      <div className="header bg-[url('/imgs/headerBg.jpg')] bg-center h-40 md:h-80  flex flex-col justify-center items-center">
        <AnimatePresence mode="wait">
          <motion.h1
            key={current}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={`py-10 text-5xl sm:text-8xl font-bold  drop-shadow-lg text-center ${headings[current] === "About ME" ? "scondTxt" : "text-white"}`}
          >
            {headings[current]}
          </motion.h1>
        </AnimatePresence>
      </div>
      <div className="aboutMe my-10 md:mx-30 md:flex gap-6">
        <div className="img md:h-92 ">
          <img src="/imgs/myImg.jpg" alt="" />
        </div>
        <div className="text p-8">
          <h1 className="scondTxt text-4xl font-bold">About Me</h1>
          <p className="text-2xl py-6 lightTxt">I’ve always believed that even a small act of kindness can change someone’s life.
            That belief inspired me to create this website — a place where people in need can reach out and generous hearts can make a difference.
            I built this platform to contribute, connect, and empower, using my skills as a web developer to turn compassion into action.</p>
        </div>
      </div>
      <Quote scollTxt={false} />

    </div>
  );
};

export default AboutUs;
