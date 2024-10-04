import React, { useEffect } from "react";
import {
  UserGroupIcon,
  ChatBubbleLeftRightIcon,
  StarIcon,
  BanknotesIcon,
} from "@heroicons/react/24/outline";
import Glide from "@glidejs/glide";
import ImageCard from "./ImageCard";
import {sliderData} from "../Data/sliderData";
import './extra.css'

const Overview = () => {
  useEffect(() => {
    const slider = new Glide(".glide-01", {
      type: "carousel",
      focusAt: "center",
      perView: 3,
      autoplay: 3000,
      animationDuration: 700,
      gap: 24,
      classNames: {
        nav: {
          active: "[&>*]:bg-wuiSlate-700",
        },
      },
      breakpoints: {
        1024: {
          perView: 2,
        },
        640: {
          perView: 1,
        },
      },
    }).mount();

    return () => {
      slider.destroy();
    };
  }, []);

  return (
    <div className="font-figtree bg-[#FAFBFE] min-h-screen">
      <div className="max-w-screen-xl mx-auto flex flex-wrap justify-between px-6">
        <div className="flex items-center gap-3">
          <UserGroupIcon className="h-20 w-auto text-[#9E59C3]" />
          <div>
            <h4 className="text-xl font-semibold tracking-wider">100000+</h4>
            <h4 className="tracking-wider">Monthly Users</h4>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <StarIcon className="h-20 w-auto text-[#E5716D]" />
          <div>
            <h4 className="text-xl font-semibold tracking-wider">7000+</h4>
            <h4 className="tracking-wider">Company Reviews</h4>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <ChatBubbleLeftRightIcon className="h-20 w-auto text-[#3EB584]" />
          <div>
            <h4 className="text-xl font-semibold tracking-wider">80000+</h4>
            <h4 className="tracking-wider">Happy Customers</h4>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <BanknotesIcon className="h-20 w-auto text-[#2D46CE]" />
          <div>
            <h4 className="text-xl font-semibold tracking-wider">9000+</h4>
            <h4 className="tracking-wider">Salary Insights</h4>
          </div>
        </div>
      </div>

      <h2 className="text-center mt-16 mb-8 text-3xl font-semibold">
        Find companies that deserve you!
      </h2>

      <div className="max-w-screen-xl mx-auto px-5 pb-10">
        {/*<!-- Component: Carousel with controls inside --> */}
        <div className="glide-01 relative w-full">
          {/*    <!-- Slides --> */}
          <div className="overflow-hidden" data-glide-el="track">
            <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
              {sliderData.map(item => (
                <li key={item.id}>
                  <ImageCard data={item} />
                </li>
              ))}
            </ul>
          </div>
          {/*    <!-- Controls --> */}
          <div
            className="absolute left-0 top-1/2 flex h-0 w-full items-center justify-between px-4 "
            data-glide-el="controls"
          >
            <button
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-white/20 text-slate-700 transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
              data-glide-dir="<"
              aria-label="prev slide"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-5 w-5"
              >
                <title>prev slide</title>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                />
              </svg>
            </button>
            <button
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-white/20 text-slate-700 transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
              data-glide-dir=">"
              aria-label="next slide"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-5 w-5"
              >
                <title>next slide</title>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </button>
          </div>
        </div>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/Glide.js/3.0.2/glide.js"></script>
        {/*<!-- End Carousel with controls inside --> */}
      </div>

      <div className="flex justify-center">
      <button className="button-29">View all companies</button>
      </div>
    </div>
  );
};

export default Overview;
