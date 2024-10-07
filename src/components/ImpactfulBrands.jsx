import React from "react";
import BrandCard from "./BrandCard";

const ImpactfulBrands = () => {
  return (
    <div className="py-7 px-5">
      <h2 className="text-2xl max-w-screen-xl mx-auto font-semibold">Brands of Impact</h2>

      <div className="flex max-w-screen-2xl mx-auto flex-wrap gap-4 justify-center">
        <BrandCard />
        <BrandCard />
        <BrandCard />
        <BrandCard />
        <BrandCard />
        <BrandCard />
      </div>
      
    </div>
  );
};

export default ImpactfulBrands;
