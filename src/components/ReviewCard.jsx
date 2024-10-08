import React from "react";
import Star from "../assets/star-icon.png";

const ReviewCard = (props) => {
  return (
    <div className="flex justify-center items-center py-5">
      <div className="bg-white p-6 rounded-lg border-2 shadow-lg max-w-sm w-full sm:max-w-md md:max-w-lg lg:max-w-xl">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-xl font-semibold text-gray-900">
            {props.data.reviewTitle}
          </h2>
          <span className="bg-[#5ba829] text-white px-2 py-[2px] rounded-md flex items-center gap-1">
            <img src={Star} alt="..." className="h-3 w-auto" />
            <p className="text-xs">{props.data.rating}</p>
          </span>
        </div>
        <p className="text-sm text-blue-600 mb-4">
          {props.data.feild}
        </p>
        <p className="text-xs text-gray-500 mb-4">{props.data.time}</p>
        <div className="mb-2">
          <p className="font-semibold text-gray-800">Likes:</p>
          <p className="text-gray-700">{props.data.likes}</p>
        </div>
        <div>
          <p className="font-semibold text-gray-800">Dislikes:</p>
          <p className="text-gray-700">{props.data.dislikes.slice(0,80)}....</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
