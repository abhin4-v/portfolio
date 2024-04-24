import React, { useState } from "react";
import { AiOutlineTranslation } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const App = () => {
  const [firstClick, setFirstClick] = useState(true);
  const handleDivClick = () => {
    if (firstClick) {
      alert("Unauthorized Access");
    }
    setFirstClick(false);
  };
  return (
    <div className="zoominFade">
      <img
        src="https://4kwallpapers.com/images/wallpapers/lofi-boy-landscape-3840x2160-15195.jpg"
        alt=""
        className="absolute h-screen w-screen -z-20"
      />
      <div className="h-screen w-screen absolute bg-black opacity-30 backdrop-blur-sm   -z-10" ></div>
      <div className="flex flex-col h-screen text-white">
        {/* NavBAr*/}
        <div className="flex justify-between p-4 bg-[#00000047] backdrop-blur-sm shadow-lg hover:shadow-2xl duration-500 font-yatra">
          <div className="text-lg font-bold hover:text-xl duration-200 ">
            Abhinav Kumar Jha
          </div>
          <a
            href="https://github.com/abhin4-v"
            className="text-lg hover:text-xl duration-200 "
          >
            More
          </a>
        </div>
        {/* Body */}

        <div className="flex flex-col justify-center items-center h-full w-full" onClick={handleDivClick}>
          <div className="flex flex-col justify-center items-center font-mono mb-40">
          <AiOutlineTranslation className="text-7xl mb-8 text-black animate-none" />
            <h1 className="text-6xl font-bold animate-pulse "> Welcome to My Portfolio </h1>
            <h2 className="text-3xl text-[#352D2D] mt-5 ">
              Check out my socials for more info
            </h2>
          </div>
          <div className=" absolute flex justify-between w-40  bottom-0 mb-12 text-3xl">
            <a
              className="hover:text-4xl duration-200"
              href="https://www.instagram.com/abhi_nav0003/"
            >
              <FaInstagram />
            </a>
            <a
              className="hover:text-4xl duration-200"
              href="https://github.com/abhin4-v"
            >
              <FaGithub />
            </a>
            <a
              className="hover:text-4xl duration-200"
              href="https://www.linkedin.com/in/abhinav-kumar-134174270"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
