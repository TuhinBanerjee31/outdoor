import React from "react";
import Star from "../assets/star-icon.png"
import { Link } from "react-router-dom";

const ImageCard = (props) => {
  return (
    <Link to={props.data.redirectLink}>
      <div className="max-w-screen-md bg-white border border-gray-200 rounded-lg shadow">
        <div>
          <img
            className="rounded-t-lg"
            src={props.data.companyImage}
            alt=""
          />
        </div>
        <div className="p-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src={props.data.companyLogo}
              className="h-auto w-14 border-2 p-1 rounded-lg"
            />

            <div>
              <h4 className="font-semibold text-xl">{props.data.companyName}</h4>
              <h5 className="text-sm">{props.data.companyType}</h5>
            </div>
          </div>

          <span className="bg-[#5ba829] text-white px-2 rounded-md flex items-center gap-1"><img src={Star} alt="..." className="h-3.5 w-3.5" /><p>{props.data.rating}</p></span>
        </div>
      </div>
    </Link>
  );
};

export default ImageCard;
