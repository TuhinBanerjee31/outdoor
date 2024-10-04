import React from "react";
import { Carousel } from "@material-tailwind/react";

const Testimonial = () => {
  return (
    <div className="font-figtree bg-[#FFFFFF] min-h-screen py-10 px-7">
      <h2 className="text-center text-3xl font-semibold">
        We help lakhs of users find their perfect company every month
      </h2>
      <h5 className="text-center text-lg py-2">
        Here’s what they say about us 😊
      </h5>

      <div className="max-w-screen-md mx-auto my-6">
      <Carousel
      prevArrow={false}
      nextArrow={false}
      autoplay
      className="rounded-xl"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-black" : "w-4 bg-black/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      <div className="bg-[#F2F2F2] w-[100%] min-h-[60vh] px-10 py-6 flex flex-col justify-around">
        <h3 className="text-3xl tracking-wider leading-relaxed flex flex-wrap">“I have used OutDoor multiple times in the past. Whenever I apply to a company, OutDoor is my go-to place.”</h3>
        <h3 className="text-xl font-semibold">Manpreet Bedi</h3>
      </div>

      <div className="bg-[#F2F2F2] w-[100%] min-h-[60vh] px-10 py-6 flex flex-col justify-around">
      <h3 className="text-3xl tracking-wider leading-relaxed flex flex-wrap">“One of the genuine platform to express your views regarding any company. Gives insights into the company structure and employment policies.”</h3>
      <h3 className="text-xl font-semibold">Sneha Sharma</h3>
      </div>

      <div className="bg-[#F2F2F2] w-[100%] min-h-[60vh] px-10 py-6 flex flex-col justify-around">
      <h3 className="text-3xl tracking-wider leading-relaxed flex flex-wrap">“It is a very good platform for job seekers to understand a company and its management.”</h3>
      <h3 className="text-xl font-semibold">Preetam Kumar</h3>
      </div>

      <div className="bg-[#F2F2F2] w-[100%] min-h-[60vh] px-10 py-6 flex flex-col justify-around">
      <h3 className="text-3xl tracking-wider leading-relaxed flex flex-wrap">“All of the reviews offered are genuine, non-biased, and unpaid. You receive an honest review from people on OutDoor based on their experience.”</h3>
      <h3 className="text-xl font-semibold">Khushi Singh</h3>
      </div>

      <div className="bg-[#F2F2F2] w-[100%] min-h-[60vh] px-10 py-6 flex flex-col justify-around">
      <h3 className="text-3xl tracking-wider leading-relaxed flex flex-wrap">“It's a great job done by OutDoor which helps job seekers for better company and management behaviour.”</h3>
      <h3 className="text-xl font-semibold">Yash Sharma</h3>
      </div>
    </Carousel>
      </div>

    </div>
  );
};

export default Testimonial;
