import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { accentureData } from "../Data/accentureData";
import { asianPaintsData } from "../Data/asianPaintsData";
import {blackBuckData} from "../Data/blackBuckData";
import {dellData} from "../Data/dellData";
import {deloitteData} from "../Data/deloitteData";
import {googleData} from "../Data/googleData";
import {tataMotorsData} from "../Data/tataMotorsData";
import {uberData} from "../Data/uberData";
import {udaanData} from "../Data/udaanData";
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
          <h1 className="text-center mx-auto text-lg font-semibold">Accenture Reviews</h1>
          <div className="flex flex-wrap gap-3 justify-around">
            {accentureData.reviewsData.map((item) => (
              <div key={item.reviewTitle}>
                <ReviewCard data={item} />
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-screen-2xl mx-auto bg-[#E9F6FF] rounded-xl py-8 my-6">
          <h1 className="text-center mx-auto text-lg font-semibold">Asian Paints Reviews</h1>
          <div className="flex flex-wrap gap-3 justify-around">
            {asianPaintsData.reviewsData.map((item) => (
              <div key={item.reviewTitle}>
                <ReviewCard data={item} />
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-screen-2xl mx-auto bg-[#E9F6FF] rounded-xl py-8 my-6">
          <h1 className="text-center mx-auto text-lg font-semibold">BlackBuck Reviews</h1>
          <div className="flex flex-wrap gap-3 justify-around">
            {blackBuckData.reviewsData.map((item) => (
              <div key={item.reviewTitle}>
                <ReviewCard data={item} />
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-screen-2xl mx-auto bg-[#E9F6FF] rounded-xl py-8 my-6">
          <h1 className="text-center mx-auto text-lg font-semibold">Dell Reviews</h1>
          <div className="flex flex-wrap gap-3 justify-around">
            {dellData.reviewsData.map((item) => (
              <div key={item.reviewTitle}>
                <ReviewCard data={item} />
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-screen-2xl mx-auto bg-[#E9F6FF] rounded-xl py-8 my-6">
          <h1 className="text-center mx-auto text-lg font-semibold">Deloitte Reviews</h1>
          <div className="flex flex-wrap gap-3 justify-around">
            {deloitteData.reviewsData.map((item) => (
              <div key={item.reviewTitle}>
                <ReviewCard data={item} />
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-screen-2xl mx-auto bg-[#E9F6FF] rounded-xl py-8 my-6">
          <h1 className="text-center mx-auto text-lg font-semibold">Google Reviews</h1>
          <div className="flex flex-wrap gap-3 justify-around">
            {googleData.reviewsData.map((item) => (
              <div key={item.reviewTitle}>
                <ReviewCard data={item} />
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-screen-2xl mx-auto bg-[#E9F6FF] rounded-xl py-8 my-6">
          <h1 className="text-center mx-auto text-lg font-semibold">Tata Motors Reviews</h1>
          <div className="flex flex-wrap gap-3 justify-around">
            {tataMotorsData.reviewsData.map((item) => (
              <div key={item.reviewTitle}>
                <ReviewCard data={item} />
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-screen-2xl mx-auto bg-[#E9F6FF] rounded-xl py-8 my-6">
          <h1 className="text-center mx-auto text-lg font-semibold">Uber Reviews</h1>
          <div className="flex flex-wrap gap-3 justify-around">
            {uberData.reviewsData.map((item) => (
              <div key={item.reviewTitle}>
                <ReviewCard data={item} />
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-screen-2xl mx-auto bg-[#E9F6FF] rounded-xl py-8 my-6">
          <h1 className="text-center mx-auto text-lg font-semibold">Udaan Reviews</h1>
          <div className="flex flex-wrap gap-3 justify-around">
            {udaanData.reviewsData.map((item) => (
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
