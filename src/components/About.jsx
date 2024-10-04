import React from "react";
import about1 from "../assets/about_ill_1.svg";
import about2 from "../assets/about_ill_2.svg";
import about3 from "../assets/about_ill_3.svg";
import './extra.css'

const About = () => {
  return (
    <div className="font-figtree bg-[#FFFFFF] min-h-screen py-10">
      <h2 className="text-center text-3xl font-semibold">Explore OutDoor🔎</h2>
      <h5 className="text-center text-lg py-2">
        Globally renowned platform for company reviews, salaries and more!
      </h5>

      <div className="max-w-screen-xl bg-[#E9F6FF] rounded-2xl mx-auto flex md:flex-row flex-col-reverse justify-between items-center px-5 py-10 my-4">
        <div className="md:pr-20">
          <img src={about1} alt="..." className="h-96" />
        </div>

        <div className="flex flex-col justify-end items-end gap-4 px-4 py-6">
          <h1 className="text-5xl font-semibold tracking-wider text-right">
            Read company reviews to avoid career mistakes
          </h1>
          <button className="button-29">Explore Company Reviews</button>
        </div>
      </div>

      <div className="max-w-screen-xl bg-[#F4FFF7] rounded-2xl mx-auto flex md:flex-row flex-col-reverse justify-between items-center px-5 py-10 my-4">
        <div className="md:pr-20">
          <img src={about2} alt="..." className="h-96" />
        </div>

        <div className="flex flex-col justify-end items-end gap-4 px-4 py-6">
          <h1 className="text-5xl font-semibold tracking-wider text-right">
          Explore salary insights of several companies
          </h1>
          <button className="button-29">Explore Insights</button>
        </div>
      </div>

      <div className="max-w-screen-xl bg-[#FFF5F0] rounded-2xl mx-auto flex md:flex-row flex-col-reverse justify-between items-center px-5 py-10 my-4">
        <div className="md:pr-20">
          <img src={about3} alt="..." className="h-96" />
        </div>

        <div className="flex flex-col justify-end items-end gap-4 px-4 py-6">
          <h1 className="text-5xl font-semibold tracking-wider text-right">
          Find out all there is to know about the company you like
          </h1>
          <button className="button-29">Discover the Information</button>
        </div>
      </div>
    </div>
  );
};

export default About;
