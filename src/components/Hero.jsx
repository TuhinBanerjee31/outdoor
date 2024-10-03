import React from "react";
import heroImage from "../assets/header_ill.svg";
import Typewriter from "typewriter-effect";
import header2 from "../assets/header-2.jpg";

const Hero = () => {
  return (
    <div className="font-figtree bg-[#FFFFFF] py-20 px-5">
      <div className="max-w-screen-xl mx-auto flex md:flex-row flex-col-reverse justify-between items-center px-5">
        <div className="text-5xl font-semibold tracking-wider">
          <h1>Globally rated platfrom for </h1>
          <span className="text-[#4862EC] py-2">
            <Typewriter
              options={{
                strings: [
                  "Company Reviews",
                  "Salary Insights",
                  "Jobs Available",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </div>

        <img src={heroImage} alt="..." className="h-80 py-7" />
      </div>

      <div className="relative transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 bg-blue-800 h-52 mt-6 rounded-lg cursor-pointer flex items-center justify-center overflow-hidden max-w-screen-xl mx-auto">
        {/* <!-- Background Image --> */}
        <div className="absolute inset-0">
          {/* <!-- Add the background image here --> */}
          <img
            src={header2}
            className="w-full h-full object-cover opacity-30"
            alt="Background Image"
          />
        </div>

        {/* <!-- Content --> */}
        <div className="relative z-10 text-center px-8">
          {/* <!-- Title --> */}
          <h1 className="text-white text-3xl font-semibold mb-4 tracking-wider">
            Anonymous career talk with real professionals
          </h1>
          {/* <!-- Button --> */}
          <button className="bg-white text-blue-800 font-semibold tracking-wider py-2 px-6 rounded shadow-md hover:bg-gray-100">
            Join the conversation
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
