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
import { siecorpData } from "../Data/siecorpData";
import { cognizantData } from "../Data/cognizantData";
import { axisBankData } from "../Data/axisBankData";
import { jioData } from "../Data/jioData";
import { wiproData } from "../Data/wiproData";
import { vinciData } from "../Data/vinciData";
import { relianceRetailData } from "../Data/relianceRetailData";
import { iciciBankData } from "../Data/iciciBankData";
import { kiewitData } from "../Data/kiewitData";
import { ibmData } from "../Data/ibmData";
import { tcsData } from "../Data/tcsData";
import { hdfcBankData } from "../Data/hdfcBankData";
import { landtData } from "../Data/landtData";
import { teleperformanceData } from "../Data/teleperformanceData";
import { ienergizerData } from "../Data/ienergizerData";
import {kinexaData} from "../Data/kinexaData";
import {techMahindraData} from "../Data/techMahindraData";
import {amazonData} from "../Data/amazonData";
import {byjusData} from "../Data/byjusData";
import {viData} from "../Data/viData";
import {wnsData} from "../Data/wnsData";

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
          <h1 className="text-center mx-auto text-lg font-semibold">Siecorp Reviews</h1>
          <div className="flex flex-wrap gap-3 justify-around">
            {siecorpData.reviewsData.map((item) => (
              <div key={item.reviewTitle}>
                <ReviewCard data={item} />
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-screen-2xl mx-auto bg-[#E9F6FF] rounded-xl py-8 my-6">
          <h1 className="text-center mx-auto text-lg font-semibold">Cognizant Reviews</h1>
          <div className="flex flex-wrap gap-3 justify-around">
            {cognizantData.reviewsData.map((item) => (
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
          <h1 className="text-center mx-auto text-lg font-semibold">Teleperformance Reviews</h1>
          <div className="flex flex-wrap gap-3 justify-around">
            {teleperformanceData.reviewsData.map((item) => (
              <div key={item.reviewTitle}>
                <ReviewCard data={item} />
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-screen-2xl mx-auto bg-[#E9F6FF] rounded-xl py-8 my-6">
          <h1 className="text-center mx-auto text-lg font-semibold">Axis Bank Reviews</h1>
          <div className="flex flex-wrap gap-3 justify-around">
            {axisBankData.reviewsData.map((item) => (
              <div key={item.reviewTitle}>
                <ReviewCard data={item} />
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-screen-2xl mx-auto bg-[#E9F6FF] rounded-xl py-8 my-6">
          <h1 className="text-center mx-auto text-lg font-semibold">Jio Reviews</h1>
          <div className="flex flex-wrap gap-3 justify-around">
            {jioData.reviewsData.map((item) => (
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
          <h1 className="text-center mx-auto text-lg font-semibold">Wipro Reviews</h1>
          <div className="flex flex-wrap gap-3 justify-around">
            {wiproData.reviewsData.map((item) => (
              <div key={item.reviewTitle}>
                <ReviewCard data={item} />
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-screen-2xl mx-auto bg-[#E9F6FF] rounded-xl py-8 my-6">
          <h1 className="text-center mx-auto text-lg font-semibold">Vinci Reviews</h1>
          <div className="flex flex-wrap gap-3 justify-around">
            {vinciData.reviewsData.map((item) => (
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
          <h1 className="text-center mx-auto text-lg font-semibold">Reliance Retail Reviews</h1>
          <div className="flex flex-wrap gap-3 justify-around">
            {relianceRetailData.reviewsData.map((item) => (
              <div key={item.reviewTitle}>
                <ReviewCard data={item} />
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-screen-2xl mx-auto bg-[#E9F6FF] rounded-xl py-8 my-6">
          <h1 className="text-center mx-auto text-lg font-semibold">ICICI Bank Reviews</h1>
          <div className="flex flex-wrap gap-3 justify-around">
            {iciciBankData.reviewsData.map((item) => (
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
          <h1 className="text-center mx-auto text-lg font-semibold">Kiewit Reviews</h1>
          <div className="flex flex-wrap gap-3 justify-around">
            {kiewitData.reviewsData.map((item) => (
              <div key={item.reviewTitle}>
                <ReviewCard data={item} />
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-screen-2xl mx-auto bg-[#E9F6FF] rounded-xl py-8 my-6">
          <h1 className="text-center mx-auto text-lg font-semibold">IBM Reviews</h1>
          <div className="flex flex-wrap gap-3 justify-around">
            {ibmData.reviewsData.map((item) => (
              <div key={item.reviewTitle}>
                <ReviewCard data={item} />
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-screen-2xl mx-auto bg-[#E9F6FF] rounded-xl py-8 my-6">
          <h1 className="text-center mx-auto text-lg font-semibold">TCS Reviews</h1>
          <div className="flex flex-wrap gap-3 justify-around">
            {tcsData.reviewsData.map((item) => (
              <div key={item.reviewTitle}>
                <ReviewCard data={item} />
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-screen-2xl mx-auto bg-[#E9F6FF] rounded-xl py-8 my-6">
          <h1 className="text-center mx-auto text-lg font-semibold">iEnergizer Reviews</h1>
          <div className="flex flex-wrap gap-3 justify-around">
            {ienergizerData.reviewsData.map((item) => (
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

        <div className="max-w-screen-2xl mx-auto bg-[#E9F6FF] rounded-xl py-8 my-6">
          <h1 className="text-center mx-auto text-lg font-semibold">HDFC Bank Reviews</h1>
          <div className="flex flex-wrap gap-3 justify-around">
            {hdfcBankData.reviewsData.map((item) => (
              <div key={item.reviewTitle}>
                <ReviewCard data={item} />
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-screen-2xl mx-auto bg-[#E9F6FF] rounded-xl py-8 my-6">
          <h1 className="text-center mx-auto text-lg font-semibold">L&T Reviews</h1>
          <div className="flex flex-wrap gap-3 justify-around">
            {landtData.reviewsData.map((item) => (
              <div key={item.reviewTitle}>
                <ReviewCard data={item} />
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-screen-2xl mx-auto bg-[#E9F6FF] rounded-xl py-8 my-6">
          <h1 className="text-center mx-auto text-lg font-semibold">Kinexa Solutions Reviews</h1>
          <div className="flex flex-wrap gap-3 justify-around">
            {kinexaData.reviewsData.map((item) => (
              <div key={item.reviewTitle}>
                <ReviewCard data={item} />
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-screen-2xl mx-auto bg-[#E9F6FF] rounded-xl py-8 my-6">
          <h1 className="text-center mx-auto text-lg font-semibold">Tech Mahindra Reviews</h1>
          <div className="flex flex-wrap gap-3 justify-around">
            {techMahindraData.reviewsData.map((item) => (
              <div key={item.reviewTitle}>
                <ReviewCard data={item} />
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-screen-2xl mx-auto bg-[#E9F6FF] rounded-xl py-8 my-6">
          <h1 className="text-center mx-auto text-lg font-semibold">Amazon Reviews</h1>
          <div className="flex flex-wrap gap-3 justify-around">
            {amazonData.reviewsData.map((item) => (
              <div key={item.reviewTitle}>
                <ReviewCard data={item} />
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-screen-2xl mx-auto bg-[#E9F6FF] rounded-xl py-8 my-6">
          <h1 className="text-center mx-auto text-lg font-semibold">Byjus Reviews</h1>
          <div className="flex flex-wrap gap-3 justify-around">
            {byjusData.reviewsData.map((item) => (
              <div key={item.reviewTitle}>
                <ReviewCard data={item} />
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-screen-2xl mx-auto bg-[#E9F6FF] rounded-xl py-8 my-6">
          <h1 className="text-center mx-auto text-lg font-semibold">Vodafone Idea Reviews</h1>
          <div className="flex flex-wrap gap-3 justify-around">
            {viData.reviewsData.map((item) => (
              <div key={item.reviewTitle}>
                <ReviewCard data={item} />
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-screen-2xl mx-auto bg-[#E9F6FF] rounded-xl py-8 my-6">
          <h1 className="text-center mx-auto text-lg font-semibold">WNS Reviews</h1>
          <div className="flex flex-wrap gap-3 justify-around">
            {wnsData.reviewsData.map((item) => (
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
