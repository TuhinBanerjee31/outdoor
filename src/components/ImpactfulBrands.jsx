import React from "react";
import BrandCard from "./BrandCard";
import { siecorpData } from "../Data/siecorpData";
import { googleData } from "../Data/googleData";
import { udaanData } from "../Data/udaanData";
import { iciciBankData } from "../Data/iciciBankData";
import { ibmData } from "../Data/ibmData";
import { vinciData } from "../Data/vinciData";

const ImpactfulBrands = () => {
  return (
    <div className="py-7 px-5">
      <h2 className="text-2xl max-w-screen-xl mx-auto font-semibold">Brands of Impact</h2>

      <div className="flex max-w-screen-2xl mx-auto flex-wrap gap-4 justify-center">
        <BrandCard data={siecorpData} />
        <BrandCard data={googleData} />
        <BrandCard data={udaanData} />
        <BrandCard data={iciciBankData} />
        <BrandCard data={vinciData} />
        <BrandCard data={ibmData} />
      </div>
      
    </div>
  );
};

export default ImpactfulBrands;
