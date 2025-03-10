import React from "react";
import heroImage from "../assets/header_ill.svg";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <div className="font-figtree bg-[#FAFBFE] py-20 px-5">
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

      {/* <div className="relative transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 bg-gray-800 border-2 shadow-lg h-40 mt-6 rounded-lg cursor-pointer flex items-center justify-center overflow-hidden max-w-screen-md mx-auto">
        <div className="absolute inset-0">
          <img
            src={header2}
            className="w-full h-full object-cover opacity-30"
            alt="Background Image"
          />
        </div>

        <Link to={'/siecorp-overview'} className="relative z-10 px-8">
          <div className="flex gap-4 items-center">
            <img src={SiecorpLogo} alt="..." className="md:h-32 h-24 w-auto" />

            <div className="text-left self-end">
              <h1 className="text-white md:text-3xl text-2xl font-semibold tracking-wider">SIECORP</h1>
              <h1 className="text-white md:text-2xl text-base font-semibold mb-4 tracking-wider">
                Most Impactful Brand Of The Year
              </h1>
            </div>
          </div>
        </Link>
      </div> */}
    </div>
  );
};

export default Hero;
