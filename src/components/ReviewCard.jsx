import React from "react";
import Star from "../assets/star-icon.png";

const ReviewCard = () => {
  return (
    <div className="flex justify-center items-center py-5">
      <div className="bg-white p-6 rounded-lg border-2 shadow-lg max-w-sm w-full sm:max-w-md md:max-w-lg lg:max-w-xl">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-xl font-semibold text-gray-900">
            Apprentice in Bangalore / Bengaluru
          </h2>
          <span className="bg-[#5ba829] text-white px-2 py-[2px] rounded-md flex items-center gap-1">
            <img src={Star} alt="..." className="h-3 w-auto" />
            <p className="text-xs">4.5</p>
          </span>
        </div>
        <p className="text-sm text-blue-600 mb-4">
          Business Intelligence &amp; Analytics
        </p>
        <p className="text-xs text-gray-500 mb-4">Posted on 18 Sep 2024</p>
        <div className="mb-2">
          <p className="font-semibold text-gray-800">Likes:</p>
          <p className="text-gray-700">All</p>
        </div>
        <div>
          <p className="font-semibold text-gray-800">Dislikes:</p>
          <p className="text-gray-700">Some issues for personal reasons</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
