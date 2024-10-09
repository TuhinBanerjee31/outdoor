import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { accentureData } from "../Data/accentureData";
import { asianPaintsData } from "../Data/asianPaintsData";
import ReviewCard from "../components/ReviewCard";

const Reviews = () => {
  return (
    <div className="font-figtree bg-[#FAFBFE]">
      <Navbar />
      <div className="min-h-screen py-10">
        <h2 className="text-center mb-8 text-3xl font-semibold">
          Look at what People says!
        </h2>

        <div className="max-w-screen-2xl mx-auto bg-[#E9F6FF] rounded-xl py-8 my-6">
          <h1 className="text-center mx-auto">Accenture Reviews</h1>
          <div className="flex flex-wrap gap-3 justify-around">
            {accentureData.reviewsData.map((item) => (
              <div key={item.reviewTitle}>
                <ReviewCard data={item} />
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-screen-2xl mx-auto bg-[#E9F6FF] rounded-xl py-8 my-6">
          <h1 className="text-center mx-auto">Asian Paints Reviews</h1>
          <div className="flex flex-wrap gap-3 justify-around">
            {asianPaintsData.reviewsData.map((item) => (
              <div key={item.reviewTitle}>
                <ReviewCard data={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Reviews;
