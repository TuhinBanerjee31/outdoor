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
import { oil307Data } from "../Data/oil307Data";
import { cognizantData } from "../Data/cognizantData";
import { axisBankData } from "../Data/axisBankData";
import { jioData } from "../Data/jioData";
import { wiproData } from "../Data/wiproData";
import { vinciData } from "../Data/vinciData";
import { relianceRetailData } from "../Data/relianceRetailData";
import { iciciBankData } from "../Data/iciciBankData";
import { kiewitData } from "../Data/kiewitData";
import {kpngData} from "../Data/kpngData"
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
import { tuckerData } from "../Data/tuckerData";

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
          <div className="grid grid-cols-12">
            {accentureData.reviewsData.map((item) => (
              <div key={item.reviewTitle} className="col-span-6">
                <ReviewCard data={item} />
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-screen-2xl mx-auto bg-[#E9F6FF] rounded-xl py-8 my-6">
          <h1 className="text-center mx-auto text-lg font-semibold">KPNG Reviews</h1>
          <div className="grid grid-cols-12">
            {kpngData.reviewsData.map((item) => (
              <div key={item.reviewTitle} className="col-span-6">
                <ReviewCard data={item} />
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-screen-2xl mx-auto bg-[#E9F6FF] rounded-xl py-8 my-6">
          <h1 className="text-center mx-auto text-lg font-semibold">Cognizant Reviews</h1>
          <div className="grid grid-cols-12">
            {cognizantData.reviewsData.map((item) => (
              <div key={item.reviewTitle} className="col-span-6">
                <ReviewCard data={item} />
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-screen-2xl mx-auto bg-[#E9F6FF] rounded-xl py-8 my-6">
          <h1 className="text-center mx-auto text-lg font-semibold">Asian Paints Reviews</h1>
          <div className="grid grid-cols-12">
            {asianPaintsData.reviewsData.map((item) => (
              <div key={item.reviewTitle} className="col-span-6">
                <ReviewCard data={item} />
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-screen-2xl mx-auto bg-[#E9F6FF] rounded-xl py-8 my-6">
          <h1 className="text-center mx-auto text-lg font-semibold">BlackBuck Reviews</h1>
          <div className="grid grid-cols-12">
            {blackBuckData.reviewsData.map((item) => (
              <div key={item.reviewTitle} className="col-span-6">
                <ReviewCard data={item} />
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-screen-2xl mx-auto bg-[#E9F6FF] rounded-xl py-8 my-6">
          <h1 className="text-center mx-auto text-lg font-semibold">Teleperformance Reviews</h1>
          <div className="grid grid-cols-12">
            {teleperformanceData.reviewsData.map((item) => (
              <div key={item.reviewTitle} className="col-span-6">
                <ReviewCard data={item} />
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-screen-2xl mx-auto bg-[#E9F6FF] rounded-xl py-8 my-6">
          <h1 className="text-center mx-auto text-lg font-semibold">Axis Bank Reviews</h1>
          <div className="grid grid-cols-12">
            {axisBankData.reviewsData.map((item) => (
              <div key={item.reviewTitle} className="col-span-6">
                <ReviewCard data={item} />
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-screen-2xl mx-auto bg-[#E9F6FF] rounded-xl py-8 my-6">
          <h1 className="text-center mx-auto text-lg font-semibold">Jio Reviews</h1>
          <div className="grid grid-cols-12">
            {jioData.reviewsData.map((item) => (
              <div key={item.reviewTitle} className="col-span-6">
                <ReviewCard data={item} />
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-screen-2xl mx-auto bg-[#E9F6FF] rounded-xl py-8 my-6">
          <h1 className="text-center mx-auto text-lg font-semibold">Tucker Reviews</h1>
          <div className="grid grid-cols-12">
            {tuckerData.reviewsData.map((item) => (
              <div key={item.reviewTitle} className="col-span-6">
                <ReviewCard data={item} />
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-screen-2xl mx-auto bg-[#E9F6FF] rounded-xl py-8 my-6">
          <h1 className="text-center mx-auto text-lg font-semibold">Dell Reviews</h1>
          <div className="grid grid-cols-12">
            {dellData.reviewsData.map((item) => (
              <div key={item.reviewTitle} className="col-span-6">
                <ReviewCard data={item} />
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-screen-2xl mx-auto bg-[#E9F6FF] rounded-xl py-8 my-6">
          <h1 className="text-center mx-auto text-lg font-semibold">Wipro Reviews</h1>
          <div className="grid grid-cols-12">
            {wiproData.reviewsData.map((item) => (
              <div key={item.reviewTitle} className="col-span-6">
                <ReviewCard data={item} />
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-screen-2xl mx-auto bg-[#E9F6FF] rounded-xl py-8 my-6">
          <h1 className="text-center mx-auto text-lg font-semibold">307oil Reviews</h1>
          <div className="grid grid-cols-12">
            {oil307Data.reviewsData.map((item) => (
              <div key={item.reviewTitle} className="col-span-6">
                <ReviewCard data={item} />
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-screen-2xl mx-auto bg-[#E9F6FF] rounded-xl py-8 my-6">
          <h1 className="text-center mx-auto text-lg font-semibold">Vinci Reviews</h1>
          <div className="grid grid-cols-12">
            {vinciData.reviewsData.map((item) => (
              <div key={item.reviewTitle} className="col-span-6">
                <ReviewCard data={item} />
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-screen-2xl mx-auto bg-[#E9F6FF] rounded-xl py-8 my-6">
          <h1 className="text-center mx-auto text-lg font-semibold">Deloitte Reviews</h1>
          <div className="grid grid-cols-12">
            {deloitteData.reviewsData.map((item) => (
              <div key={item.reviewTitle} className="col-span-6">
                <ReviewCard data={item} />
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-screen-2xl mx-auto bg-[#E9F6FF] rounded-xl py-8 my-6">
          <h1 className="text-center mx-auto text-lg font-semibold">Google Reviews</h1>
          <div className="grid grid-cols-12">
            {googleData.reviewsData.map((item) => (
              <div key={item.reviewTitle} className="col-span-6">
                <ReviewCard data={item} />
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-screen-2xl mx-auto bg-[#E9F6FF] rounded-xl py-8 my-6">
          <h1 className="text-center mx-auto text-lg font-semibold">Reliance Retail Reviews</h1>
          <div className="grid grid-cols-12">
            {relianceRetailData.reviewsData.map((item) => (
              <div key={item.reviewTitle} className="col-span-6">
                <ReviewCard data={item} />
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-screen-2xl mx-auto bg-[#E9F6FF] rounded-xl py-8 my-6">
          <h1 className="text-center mx-auto text-lg font-semibold">ICICI Bank Reviews</h1>
          <div className="grid grid-cols-12">
            {iciciBankData.reviewsData.map((item) => (
              <div key={item.reviewTitle} className="col-span-6">
                <ReviewCard data={item} />
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-screen-2xl mx-auto bg-[#E9F6FF] rounded-xl py-8 my-6">
          <h1 className="text-center mx-auto text-lg font-semibold">Tata Motors Reviews</h1>
          <div className="grid grid-cols-12">
            {tataMotorsData.reviewsData.map((item) => (
              <div key={item.reviewTitle} className="col-span-6">
                <ReviewCard data={item} />
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-screen-2xl mx-auto bg-[#E9F6FF] rounded-xl py-8 my-6">
          <h1 className="text-center mx-auto text-lg font-semibold">Uber Reviews</h1>
          <div className="grid grid-cols-12">
            {uberData.reviewsData.map((item) => (
              <div key={item.reviewTitle} className="col-span-6">
                <ReviewCard data={item} />
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-screen-2xl mx-auto bg-[#E9F6FF] rounded-xl py-8 my-6">
          <h1 className="text-center mx-auto text-lg font-semibold">Kiewit Reviews</h1>
          <div className="grid grid-cols-12">
            {kiewitData.reviewsData.map((item) => (
              <div key={item.reviewTitle} className="col-span-6">
                <ReviewCard data={item} />
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-screen-2xl mx-auto bg-[#E9F6FF] rounded-xl py-8 my-6">
          <h1 className="text-center mx-auto text-lg font-semibold">IBM Reviews</h1>
          <div className="grid grid-cols-12">
            {ibmData.reviewsData.map((item) => (
              <div key={item.reviewTitle} className="col-span-6">
                <ReviewCard data={item} />
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-screen-2xl mx-auto bg-[#E9F6FF] rounded-xl py-8 my-6">
          <h1 className="text-center mx-auto text-lg font-semibold">TCS Reviews</h1>
          <div className="grid grid-cols-12">
            {tcsData.reviewsData.map((item) => (
              <div key={item.reviewTitle} className="col-span-6">
                <ReviewCard data={item} />
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-screen-2xl mx-auto bg-[#E9F6FF] rounded-xl py-8 my-6">
          <h1 className="text-center mx-auto text-lg font-semibold">iEnergizer Reviews</h1>
          <div className="grid grid-cols-12">
            {ienergizerData.reviewsData.map((item) => (
              <div key={item.reviewTitle} className="col-span-6">
                <ReviewCard data={item} />
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-screen-2xl mx-auto bg-[#E9F6FF] rounded-xl py-8 my-6">
          <h1 className="text-center mx-auto text-lg font-semibold">Udaan Reviews</h1>
          <div className="grid grid-cols-12">
            {udaanData.reviewsData.map((item) => (
              <div key={item.reviewTitle} className="col-span-6">
                <ReviewCard data={item} />
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-screen-2xl mx-auto bg-[#E9F6FF] rounded-xl py-8 my-6">
          <h1 className="text-center mx-auto text-lg font-semibold">HDFC Bank Reviews</h1>
          <div className="grid grid-cols-12">
            {hdfcBankData.reviewsData.map((item) => (
              <div key={item.reviewTitle} className="col-span-6">
                <ReviewCard data={item} />
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-screen-2xl mx-auto bg-[#E9F6FF] rounded-xl py-8 my-6">
          <h1 className="text-center mx-auto text-lg font-semibold">L&T Reviews</h1>
          <div className="grid grid-cols-12">
            {landtData.reviewsData.map((item) => (
              <div key={item.reviewTitle} className="col-span-6">
                <ReviewCard data={item} />
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-screen-2xl mx-auto bg-[#E9F6FF] rounded-xl py-8 my-6">
          <h1 className="text-center mx-auto text-lg font-semibold">Kinexa Solutions Reviews</h1>
          <div className="grid grid-cols-12">
            {kinexaData.reviewsData.map((item) => (
              <div key={item.reviewTitle} className="col-span-6">
                <ReviewCard data={item} />
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-screen-2xl mx-auto bg-[#E9F6FF] rounded-xl py-8 my-6">
          <h1 className="text-center mx-auto text-lg font-semibold">Tech Mahindra Reviews</h1>
          <div className="grid grid-cols-12">
            {techMahindraData.reviewsData.map((item) => (
              <div key={item.reviewTitle} className="col-span-6">
                <ReviewCard data={item} />
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-screen-2xl mx-auto bg-[#E9F6FF] rounded-xl py-8 my-6">
          <h1 className="text-center mx-auto text-lg font-semibold">Amazon Reviews</h1>
          <div className="grid grid-cols-12">
            {amazonData.reviewsData.map((item) => (
              <div key={item.reviewTitle} className="col-span-6">
                <ReviewCard data={item} />
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-screen-2xl mx-auto bg-[#E9F6FF] rounded-xl py-8 my-6">
          <h1 className="text-center mx-auto text-lg font-semibold">Byjus Reviews</h1>
          <div className="grid grid-cols-12">
            {byjusData.reviewsData.map((item) => (
              <div key={item.reviewTitle} className="col-span-6">
                <ReviewCard data={item} />
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-screen-2xl mx-auto bg-[#E9F6FF] rounded-xl py-8 my-6">
          <h1 className="text-center mx-auto text-lg font-semibold">Vodafone Idea Reviews</h1>
          <div className="grid grid-cols-12">
            {viData.reviewsData.map((item) => (
              <div key={item.reviewTitle} className="col-span-6">
                <ReviewCard data={item} />
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-screen-2xl mx-auto bg-[#E9F6FF] rounded-xl py-8 my-6">
          <h1 className="text-center mx-auto text-lg font-semibold">WNS Reviews</h1>
          <div className="grid grid-cols-12">
            {wnsData.reviewsData.map((item) => (
              <div key={item.reviewTitle} className="col-span-6">
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
