import React from "react";

const OverviewAbout = () => {
  return (
    <div className="py-7 max-w-screen-xl mx-auto px-5">
      <h2 className="text-2xl font-semibold">About Google</h2>

      <div className="border-2 rounded-md h-[50vh] my-5 flex justify-between px-4 py-5">
        <div className="flex flex-col justify-between">
            <div className="flex flex-col">
                <p className="text-[#5E6BAE]">Founded in</p>
                <p className="text-black">--</p>
            </div>

            <div className="flex flex-col">
                <p className="text-[#5E6BAE]">Headquarters</p>
                <p className="text-black">Mountain View,California, United States</p>
            </div>

            <div className="flex flex-col">
                <p className="text-[#5E6BAE]">Primary Industry</p>
                <p className="text-black">Software Product</p>
            </div>
        </div>

        <div className="flex flex-col justify-between">
            <div className="flex flex-col">
                <p className="text-[#5E6BAE]">India Employee Count</p>
                <p className="text-black">10k-50k</p>
            </div>

            <div className="flex flex-col">
                <p className="text-[#5E6BAE]">Office Locations</p>
                <p className="text-black">Bangalore / Bengaluru |<br></br>Hyderabad / Secunderabad |<br></br>Gurgaon / Gurugram |<br></br>Mumbai</p>
            </div>

            <div className="flex flex-col">
                <p className="text-[#5E6BAE]">Other Industries</p>
                <p className="text-black">Analytics & KPO</p>
            </div>
        </div>

        <div className="flex flex-col justify-around">
            <div className="flex flex-col">
                <p className="text-[#5E6BAE]">Global Employee Count</p>
                <p className="text-black">1 Lakh+</p>
            </div>

            <div className="flex flex-col">
                <p className="text-[#5E6BAE]">Website</p>
                <p className="text-black">google.com</p>
            </div>
        </div>
      </div>

      <p className="px-2 text-sm pb-2">Google’s mission is to organize the world‘s information and make it universally accessible and useful. Since our founding in 1998, Google has grown by leaps and bounds. From offering search in a single language we now offer dozens of products and services—including various forms of advertising and web applications for all kinds of tasks—in scores of languages. And starting from two computer science students in a university dorm room, we now have thousands of employees and offices around the world. A lot has changed since the first Google search engine appeared. But some things haven’t changed: our dedication to our users and our belief in the possibilities of the Internet itself.</p>
      <p className="px-2 text-sm pb-2"><b>Mission:</b> Google's mission is to organize the world's information and make it universally accessible and useful.</p>
      <p className="px-2 text-sm"><b>Vision:</b> To provide access to the world’s information in one click. The company’s nature of business is a direct manifestation of this vision statement.</p>
    </div>
  );
};

export default OverviewAbout;
