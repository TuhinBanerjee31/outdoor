import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {salaryData} from "../Data/salaryData";
import SalaryCard from "../components/SalaryCard"

const Salaries = () => {
  return (
    <div className="font-figtree bg-[#FAFBFE]">
      <Navbar />
      <div className="min-h-screen py-10">
        <h2 className="text-center mb-8 text-3xl font-semibold">
          Position and Salary that Industry Offers!
        </h2>

        <div className="max-w-screen-2xl flex flex-wrap gap-10 justify-around mx-auto bg-[#F4FFF7] py-10 rounded-xl">
        {salaryData.map((item) => (
            <div key={item.id} className="w-80">
              <SalaryCard data={item} />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Salaries;
