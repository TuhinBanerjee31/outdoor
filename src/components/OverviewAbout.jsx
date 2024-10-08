import React from "react";

const OverviewAbout = (props) => {
  return (
    <div className="py-7 max-w-screen-xl mx-auto px-5">
      <h2 className="text-2xl font-semibold">About {props.dataset.title}</h2>

      <div className="border-2 rounded-md h-[50vh] my-5 flex justify-between px-4 py-5">
        <div className="flex flex-col justify-between">
            <div className="flex flex-col">
                <p className="text-[#5E6BAE]">Founded in</p>
                <p className="text-black">{props.dataset.foundedIn}</p>
            </div>

            <div className="flex flex-col">
                <p className="text-[#5E6BAE]">Headquarters</p>
                <p className="text-black">{props.dataset.headquaters}</p>
            </div>

            <div className="flex flex-col">
                <p className="text-[#5E6BAE]">Primary Industry</p>
                <p className="text-black">{props.dataset.primaryIndustry}</p>
            </div>
        </div>

        <div className="flex flex-col justify-between">
            <div className="flex flex-col">
                <p className="text-[#5E6BAE]">India Employee Count</p>
                <p className="text-black">{props.dataset.indiaEmployeeCount}</p>
            </div>

            <div className="flex flex-col">
                <p className="text-[#5E6BAE]">Office Locations</p>
                <span className="text-black">{props.dataset.officeLocations.map(item => (
                    <p key={item}>{item}</p>
                ))}</span>
            </div>

            <div className="flex flex-col">
                <p className="text-[#5E6BAE]">Other Industries</p>
                <p className="text-black">{props.dataset.otherIndustries}</p>
            </div>
        </div>

        <div className="flex flex-col justify-around">
            <div className="flex flex-col">
                <p className="text-[#5E6BAE]">Global Employee Count</p>
                <p className="text-black">{props.dataset.globalEmployeeCount}</p>
            </div>

            <div className="flex flex-col">
                <p className="text-[#5E6BAE]">Website</p>
                <p className="text-black">{props.dataset.website}</p>
            </div>
        </div>
      </div>

      <p className="px-2 text-sm pb-2">{props.dataset.about}</p>
      <p className="px-2 text-sm pb-2"><b>Mission:</b> {props.dataset.mission}</p>
      <p className="px-2 text-sm"><b>Vision:</b> {props.dataset.vision}</p>
    </div>
  );
};

export default OverviewAbout;
