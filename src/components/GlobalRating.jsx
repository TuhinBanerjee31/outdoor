import React from "react";
import Star from "../assets/star-icon.png";
import male from "../assets/male.svg";
import female from "../assets/female.svg";

const GlobalRating = () => {
  return (
    <div className="py-7 px-5 min-h-screen">
      <h2 className="text-2xl max-w-screen-2xl mx-auto font-semibold pl-2">
        Global Ratings
      </h2>
      <h5 className="text-base text-[#5E6BAE] max-w-screen-2xl mx-auto pl-2">
        Based on 1.8k ratings
      </h5>

      <div className="max-w-screen-2xl mx-auto flex justify-between flex-col lg:flex-row border-2 rounded-xl shadow-md p-5 my-5">
        <div className="lg:w-[27vw] mx-auto bg-white p-4 text-gray-800">
          <div className="flex items-center mb-4">
            <span className="bg-[#5ba829] text-white px-2 py-[2px] rounded-md flex items-center gap-1">
              <img src={Star} alt="..." className="h-3 w-auto" />
              <p className="text-base">4.4</p>
            </span>
            <div className="ml-4 text-lg text-black font-bold">
              Overall Rating
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <span className="text-sm text-gray-600">5</span>
                <div className="h-2 w-80 bg-gray-300 ml-3 rounded-lg">
                  <div className="h-full bg-green-500 rounded-lg w-[80%]"></div>
                </div>
              </div>
              <span className="text-sm text-gray-600">1.2k</span>
            </div>

            <div className="flex items-center justify-between mt-1">
              <div className="flex items-center">
                <span className="text-sm text-gray-600">4</span>
                <div className="h-2 w-80 bg-gray-300 ml-3 rounded-lg">
                  <div className="h-full bg-green-400 rounded-lg w-[30%]"></div>
                </div>
              </div>
              <span className="text-sm text-gray-600">344</span>
            </div>

            <div className="flex items-center justify-between mt-1">
              <div className="flex items-center">
                <span className="text-sm text-gray-600">3</span>
                <div className="h-2 w-80 bg-gray-300 ml-3 rounded-lg">
                  <div className="h-full bg-yellow-400 rounded-lg w-[10%]"></div>
                </div>
              </div>
              <span className="text-sm text-gray-600">124</span>
            </div>

            <div className="flex items-center justify-between mt-1">
              <div className="flex items-center">
                <span className="text-sm text-gray-600">2</span>
                <div className="h-2 w-80 bg-gray-300 ml-3 rounded-lg">
                  <div className="h-full bg-orange-400 rounded-lg w-[5%]"></div>
                </div>
              </div>
              <span className="text-sm text-gray-600">43</span>
            </div>

            <div className="flex items-center justify-between mt-1">
              <div className="flex items-center">
                <span className="text-sm text-gray-600">1</span>
                <div className="h-2 w-80 bg-gray-300 ml-3 rounded-lg">
                  <div className="h-full bg-red-400 rounded-lg w-[10%]"></div>
                </div>
              </div>
              <span className="text-sm text-gray-600">72</span>
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
          <h2 className="text-lg font-bold">Gender Based Ratings at Google</h2>
          <p className="text-sm text-gray-500 mb-4">based on 1.5k reviews</p>

          {/* <!-- Women's Rating Section --> */}
          <div className="flex items-center justify-between p-4 bg-pink-50 rounded-lg mb-4 border border-pink-200">
            <div>
              <div className="flex items-center space-x-2 text-lg font-semibold">
                <span className="text-green-500">★</span>
                <span>4.4</span>
                <span className="text-gray-700">Rated by 350 Women</span>
              </div>
              <p className="text-sm text-gray-600">
                Rated 4.4 for Company Culture and 4.3 for Work-Life Balance
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
                <span>4.5</span>
                <span className="text-gray-700">Rated by 1.1k Men</span>
              </div>
              <p className="text-sm text-gray-600">
                Rated 4.5 for Company Culture and 4.5 for Salary & Benefits
              </p>
            </div>
            <div className="block">
              <img src={male} alt="male" className="h-12 w-12" />
            </div>
          </div>
        </div>

        <div className="lg:w-[40vw] w-full mx-auto bg-white border-2 shadow-lg rounded-lg p-6">
          {/* <!-- Title --> */}
          <h2 className="text-lg font-semibold">Work Policy at Google</h2>
          <p className="text-gray-500 text-sm mb-6">
            based on 306 reviews in last 6 months
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
                <span className="text-gray-600 font-semibold">36%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                <div className="bg-blue-500 h-2.5 rounded-full w-[36%]"></div>
              </div>
            </div>

            {/* <!-- Permanent Work from Home --> */}
            <div>
              <div className="flex justify-between items-center">
                <span className="flex items-center space-x-2 text-gray-700 font-medium">
                  <span>🏠</span>
                  <span>Permanent work from home</span>
                </span>
                <span className="text-gray-600 font-semibold">34%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                <div className="bg-blue-500 h-2.5 rounded-full w-[34%]"></div>
              </div>
            </div>

            {/* <!-- Work from Office --> */}
            <div>
              <div className="flex justify-between items-center">
                <span className="flex items-center space-x-2 text-gray-700 font-medium">
                  <span>🏬</span>
                  <span>Work from office</span>
                </span>
                <span className="text-gray-600 font-semibold">30%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                <div className="bg-blue-500 h-2.5 rounded-full w-[30%]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalRating;
