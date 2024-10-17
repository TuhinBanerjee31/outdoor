import React from "react";
import Star from "../assets/star-icon.png";
import { TrophyIcon } from "@heroicons/react/24/outline";

const OverviewHeader = (props) => {
  return (
    <div className="py-7 max-w-screen-xl mx-auto px-5">
      <div>
        <img
          src={props.dataset.logoImage}
          alt={props.dataset.title}
          className="border-2 h-20"
        />

        <div className="flex justify-between items-center py-2">
          <h2 className="text-2xl font-semibold tracking-wider">{props.dataset.title}</h2>

          <div className="flex gap-4">
            <button
              type="button"
              className="text-white bg-[#3655FF] focus:outline-none font-medium rounded-full text-sm px-6 py-2 text-center"
            >
              Follow ({props.dataset.followerCount})
            </button>
            <button
              type="button"
              className="text-white bg-[#3655FF] focus:outline-none font-medium rounded-full text-sm px-6 py-2 text-center"
            >
              More Details
            </button>
          </div>
        </div>

        <div className="flex gap-3 items-center">
        <span className="bg-[#5ba829] text-white px-2 rounded-md flex items-center gap-1"><img src={Star} alt="..." className="h-3.5 w-auto" /><p>{props.dataset.rating}</p></span>
        <p className="text-[#A4A0BE] text-sm">based on {props.dataset.totalReviewCount} Reviews</p>
        </div>

        <div className="py-3 flex gap-3">
            <span className="text-[#E0B75F] flex items-center gap-2 shadow shadow-[#E0B75F] rounded-sm py-1 px-2">
            <TrophyIcon class="h-6 w-6" />
            <p className="text-sm self-end">Top Rated Large Company - 2024</p>
            </span>

            <span className="text-[#E0B75F] flex items-center gap-2 shadow shadow-[#E0B75F] rounded-sm py-1 px-2">
            <TrophyIcon class="h-6 w-6" />
            <p className="text-sm self-end">Top Rated Internet/Product Company - 2024</p>
            </span>
        </div>
      </div>
    </div>
  );
};

export default OverviewHeader;
