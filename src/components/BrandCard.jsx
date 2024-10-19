import React from "react";
import Star from "../assets/star-icon.png";
import { Link } from "react-router-dom";

const BrandCard = (props) => {
  return (
    <Link to={props.data.redirectLink} className="py-6">
      <div className="border-2 h-auto min-w-96 rounded-md p-4 flex flex-col justify-between">
        <div className="top flex gap-7">
          <img
            src={props.data.logoImage}
            className="h-10 w-auto border-2 rounded-lg"
          />

          <div>
            <h4 className="text-lg font-semibold">{props.data.title}</h4>
            <div className="flex gap-3 items-center pt-2">
              <span className="bg-[#5ba829] text-white px-2 py-[2px] rounded-md flex items-center gap-1">
                <img src={Star} alt="..." className="h-3 w-auto" />
                <p className="text-xs">{props.data.rating}</p>
              </span>
              <p className="text-[#A4A0BE] text-sm">{props.data.totalReviewCount} reviews</p>
            </div>
          </div>
        </div>

        <div className="bottom flex justify-between text-sm font-semibold text-[#394468] pt-5">
          <span>About</span>
          <span>Reviews</span>
          <span>Insights</span>
        </div>
      </div>
    </Link>
  );
};

export default BrandCard;
