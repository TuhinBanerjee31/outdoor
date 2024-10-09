import React, {useEffect} from "react";
import { BellIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const Navbar = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <nav className="font-figtree bg-[#FAFBFE]">
      <div className="flex items-center justify-between px-6 py-4">
        <Link to={'/'} className="flex gap-2">
          <img
            src="https://static.ambitionbox.com/static/logo.svg"
            alt="..."
            className="h-8 w-auto"
          />
          <h3 className="font-semibold text-3xl">OutDoor</h3>
        </Link>

        <div className="flex items-center justify-center gap-3">
        <button type="button" className="text-white bg-[#3655FF] focus:outline-none font-medium rounded-full text-sm px-6 py-2 text-center">Contact Us</button>
        <BellIcon class="h-7 w-7 text-gray-900" />
        </div>
      </div>

      <div className="flex gap-7 bg-[#F6F7FE] px-7 py-2">
        <Link to={""} className="cursor-pointer tracking-wider">Community</Link>
        <Link to={"/reviews"} className="cursor-pointer tracking-wider">Reviews</Link>
        <Link to={"/companies"} className="cursor-pointer tracking-wider">Companies</Link>
        <Link to={""} className="cursor-pointer tracking-wider">Salaries</Link>
      </div>
    </nav>
  );
};

export default Navbar;
