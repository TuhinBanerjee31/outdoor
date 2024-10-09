import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ImageCard from "../components/ImageCard";
import { sliderData } from "../Data/sliderData";

const Companies = () => {
  return (
    <div className="font-figtree bg-[#FAFBFE]">
      <Navbar />
      <div className="min-h-screen py-10">
        <h2 className="text-center mb-8 text-3xl font-semibold">
          Discover Your Places to Work!
        </h2>
        <div className="max-w-screen-2xl flex flex-wrap gap-10 justify-around mx-auto bg-[#FFF5F0] py-10 rounded-xl">
          {sliderData.map((item) => (
            <div key={item.id} className="w-80">
              <ImageCard data={item} />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Companies;
