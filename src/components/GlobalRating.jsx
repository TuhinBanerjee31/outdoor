import React from "react";
import Star from "../assets/star-icon.png";
import male from "../assets/male.svg";
import female from "../assets/female.svg";

const GlobalRating = (props) => {
  return (
    <div className="py-7 px-5 min-h-screen">
      <h2 className="text-2xl max-w-screen-2xl mx-auto font-semibold pl-2">
        Global Ratings
      </h2>
      <h5 className="text-base text-[#5E6BAE] max-w-screen-2xl mx-auto pl-2">
        Based on {props.dataset.totalReviewCount} ratings
      </h5>

      <div className="max-w-screen-2xl mx-auto flex justify-between flex-col lg:flex-row border-2 rounded-xl shadow-md p-5 my-5">
        <div className="lg:w-[27vw] mx-auto bg-white p-4 text-gray-800">
          <div className="flex items-center mb-4">
            <span className="bg-[#5ba829] text-white px-2 py-[2px] rounded-md flex items-center gap-1">
              <img src={Star} alt="..." className="h-3 w-auto" />
              <p className="text-base">{props.dataset.rating}</p>
            </span>
            <div className="ml-4 text-lg text-black font-bold">
              Overall Rating
            </div>
          </div>
          <div>
            <div className="flex items-center gap-4">
              <div className="flex items-center">
                <span className="text-sm text-gray-600">5</span>
                <div className="h-2 md:w-80 w-64 bg-gray-300 ml-3 rounded-lg">
                  <div className="h-full bg-green-500 rounded-lg w-[80%]"></div>
                </div>
              </div>
              <span className="text-sm text-gray-600">{props.dataset.forStars[0]}</span>
            </div>

            <div className="flex items-center gap-4 mt-1">
              <div className="flex items-center">
                <span className="text-sm text-gray-600">4</span>
                <div className="h-2 md:w-80 w-64 bg-gray-300 ml-3 rounded-lg">
                  <div className="h-full bg-green-400 rounded-lg w-[30%]"></div>
                </div>
              </div>
              <span className="text-sm text-gray-600">{props.dataset.forStars[1]}</span>
            </div>

            <div className="flex items-center gap-4 mt-1">
              <div className="flex items-center">
                <span className="text-sm text-gray-600">3</span>
                <div className="h-2 md:w-80 w-64 bg-gray-300 ml-3 rounded-lg">
                  <div className="h-full bg-yellow-400 rounded-lg w-[10%]"></div>
                </div>
              </div>
              <span className="text-sm text-gray-600">{props.dataset.forStars[2]}</span>
            </div>

            <div className="flex items-center gap-4 mt-1">
              <div className="flex items-center">
                <span className="text-sm text-gray-600">2</span>
                <div className="h-2 md:w-80 w-64 bg-gray-300 ml-3 rounded-lg">
                  <div className="h-full bg-orange-400 rounded-lg w-[5%]"></div>
                </div>
              </div>
              <span className="text-sm text-gray-600">{props.dataset.forStars[3]}</span>
            </div>

            <div className="flex items-center gap-4 mt-1">
              <div className="flex items-center">
                <span className="text-sm text-gray-600">1</span>
                <div className="h-2 md:w-80 w-64 bg-gray-300 ml-3 rounded-lg">
                  <div className="h-full bg-red-400 rounded-lg w-[10%]"></div>
                </div>
              </div>
              <span className="text-sm text-gray-600">{props.dataset.forStars[4]}</span>
            </div>
          </div>
        </div>

        <div className="border-2 my-4"></div>

        <div className="lg:w-[45vw] mx-auto bg-white p-4 text-gray-800">
          <div className="text-lg text-black font-bold mb-4">
            Category Ratings
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center space-x-2">
              <span className="text-green-500">★</span>
              <span className="font-semibold">4.4</span>
              <p className="text-[#9CA2B4] underline">Company Culture</p>
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-green-500">★</span>
              <span className="font-semibold">4.3</span>
              <p className="text-[#9CA2B4] underline">Work Satisfaction</p>
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-green-500">★</span>
              <span className="font-semibold">4.4</span>
              <p className="text-[#9CA2B4] underline">Salary & Benefits</p>
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-green-500">★</span>
              <span className="font-semibold">4.2</span>
              <p className="text-[#9CA2B4] underline">Job Security</p>
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-green-500">★</span>
              <span className="font-semibold">4.4</span>
              <p className="text-[#9CA2B4] underline">Work-Life Balance</p>
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-green-500">★</span>
              <span className="font-semibold">4.2</span>
              <p className="text-[#9CA2B4] underline">Promotions/Appraisal</p>
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-green-500">★</span>
              <span className="font-semibold">4.3</span>
              <p className="text-[#9CA2B4] underline">Skill Development</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-screen-2xl mx-auto flex lg:flex-row flex-col justify-between gap-5">
        <div className="lg:w-[50vw] w-full mx-auto bg-white p-6 border-2 shadow-lg rounded-lg">
          <h2 className="text-lg font-bold">Gender Based Ratings at {props.dataset.title}</h2>
          <p className="text-sm text-gray-500 mb-4">based on {props.dataset.totalReviewCount} reviews</p>

          {/* <!-- Women's Rating Section --> */}
          <div className="flex items-center justify-between p-4 bg-pink-50 rounded-lg mb-4 border border-pink-200">
            <div>
              <div className="flex items-center space-x-2 text-lg font-semibold">
                <span className="text-green-500">★</span>
                <span>{props.dataset.womensRating[0]}</span>
                <span className="text-gray-700">Rated by {props.dataset.womensRating[1]} Women</span>
              </div>
              <p className="text-sm text-gray-600">
                Rated {props.dataset.otherFour[0]} for Company Culture and {props.dataset.otherFour[1]} for Work-Life Balance
              </p>
            </div>
            <div className="block">
              <img src={female} alt="female" className="h-12 w-12" />
            </div>
          </div>

          {/* <!-- Men's Rating Section --> */}
          <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg border border-blue-200">
            <div>
              <div className="flex items-center space-x-2 text-lg font-semibold">
                <span className="text-green-500">★</span>
                <span>{props.dataset.mensRating[0]}</span>
                <span className="text-gray-700">Rated by {props.dataset.mensRating[1]} Men</span>
              </div>
              <p className="text-sm text-gray-600">
                Rated {props.dataset.otherFour[2]} for Company Culture and {props.dataset.otherFour[3]} for Salary & Benefits
              </p>
            </div>
            <div className="block">
              <img src={male} alt="male" className="h-12 w-12" />
            </div>
          </div>
        </div>

        <div className="lg:w-[40vw] w-full mx-auto bg-white border-2 shadow-lg rounded-lg p-6">
          {/* <!-- Title --> */}
          <h2 className="text-lg font-semibold">Work Policy at {props.dataset.title}</h2>
          <p className="text-gray-500 text-sm mb-6">
            based on {props.dataset.workPolicyExtraData[0]} reviews in last {props.dataset.workPolicyExtraData[1]} months
          </p>

          {/* <!-- Policy Options --> */}
          <div className="space-y-4">
            {/* <!-- Hybrid Policy --> */}
            <div>
              <div className="flex justify-between items-center">
                <span className="flex items-center space-x-2 text-gray-700 font-medium">
                  <span>🏢</span>
                  <span>Hybrid</span>
                </span>
                <span className="text-gray-600 font-semibold">{props.dataset.workPolicyData[0]}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                <div className={`bg-blue-500 h-2.5 rounded-full`} style={{width: `${props.dataset.workPolicyData[0]}%`}}></div>
              </div>
            </div>

            {/* <!-- Permanent Work from Home --> */}
            <div>
              <div className="flex justify-between items-center">
                <span className="flex items-center space-x-2 text-gray-700 font-medium">
                  <span>🏠</span>
                  <span>Permanent work from home</span>
                </span>
                <span className="text-gray-600 font-semibold">{props.dataset.workPolicyData[1]}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                <div className={`bg-blue-500 h-2.5 rounded-full`} style={{width: `${props.dataset.workPolicyData[1]}%`}}></div>
              </div>
            </div>

            {/* <!-- Work from Office --> */}
            <div>
              <div className="flex justify-between items-center">
                <span className="flex items-center space-x-2 text-gray-700 font-medium">
                  <span>🏬</span>
                  <span>Work from office</span>
                </span>
                <span className="text-gray-600 font-semibold">{props.dataset.workPolicyData[2]}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                <div className={`bg-blue-500 h-2.5 rounded-full`} style={{width: `${props.dataset.workPolicyData[2]}%`}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalRating;
