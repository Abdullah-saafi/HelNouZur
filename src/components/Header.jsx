import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Header = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const headerSlides = [
    {
      image: '/imgs/headerimg1.webp',
      title: 'A Childhood, Not a Labor',
      description: 'Every child deserves to laugh, learn, and grow freely. Together, we can end child labor and protect their future."',
      btnText: 'Start Helping'
    },
    {
      image: '/imgs/headerimg2.webp',
      title: 'Together we can end hunger ',
      description: 'When we share what we have, we feed more than just empty stomachs; we starve the despair that tells a child they have been forgotten."',
      btnText: 'Start Helping'
    },
    {
      image: '/imgs/headerimg3.webp',
      title: 'Together for a better Tomorrow',
      description: "Every book we give them isn't just paper it's a promise that we believe in who they will become.",
      btnText: 'Start Helping'
    },
    {
      image: '/imgs/headerimg4.webp',
      title: 'Every Child Deserves to Belong',
      description: "Disability does not limit a child’s worth or dreams. With love, support, and inclusion, we can help every child live with dignity and hope.",
      btnText: 'Start Helping'
    },
  ];
  const current = headerSlides[currentIndex];

  const handlePrev = () => {
    if (currentIndex === 0) {
      setCurrentIndex(headerSlides.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex === headerSlides.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };


  return (
    <header className=" bg-[url('/imgs/headerBg.jpg')]  bg-center ">
      <div onClick={handlePrev} className="arrows absolute top-[50%] md:left-10 text-2xl scondBg p-2 sm:text-5xl opacity-52 ">

        <FaArrowLeft />
      </div>
      <div onClick={handleNext} className="arrow  absolute top-[50%] right-0 md:right-10 text-2xl scondBg p-2 sm:text-5xl opacity-52 ">
        <FaArrowRight />
      </div>
      <div className="md:flex gap-6  py-10 px-2 md:p-40">
        <div className="textContent flex-1  ">
          <h1 className="text-2xl md:text-8xl font-extrabold text-gray-900 mb-4">
            {current.title}
          </h1>
          <p className="sm:text-2xl text-gray-700 mb-8 leading-relaxed">
            {current.description}
          </p>
          <NavLink to="/need-help">
            <button className="scondBg font-bold py-3 px-8 rounded-3xl  mb-8 text-xl hover:scale-110 transition duration-300 cursor-pointer">
              {current.btnText}
            </button>
          </NavLink>
        </div>
        <div className="ImgContent flex-1 ">
          <img
            src={current.image}
            alt={current.title}
          />
        </div>


      </div>
    </header>
  );
};

export default Header;