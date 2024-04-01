import React from "react";
import { HiCode } from "react-icons/hi";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const App = () => {
  return (
    <div className="flex flex-col bg-slate-900 h-screen text-white">
      {/* NavBAr*/}
      <div className="flex justify-between p-4 bg-slate-800 font-yatra">
        <div className="text-lg font-bold ">Abhinav Kumar Jha</div>
        <a href="https://github.com/abhin4-v" className="text-lg ">GitHub</a>
      </div>
      {/* Body */}

      <div className="flex flex-col justify-center items-center h-full w-full">
        <div className="flex flex-col justify-center items-center font-mono">
          <HiCode className="text-8xl mb-7 text-red-400 animate-bounce" />
          <h1 className="text-5xl font-bold"> Welcome to My Portfolio </h1>
          <h2 className="text-3xl text-yellow-500 mt-3 ">
            Know more about me from here
          </h2>
        </div>
        <div className="flex justify-between w-40 mt-16 text-3xl">
          <a href="https://www.instagram.com/abhi_nav0003/">
            <FaInstagram />
          </a>
          <a href="https://github.com/abhin4-v">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/abhinav-kumar-134174270">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
