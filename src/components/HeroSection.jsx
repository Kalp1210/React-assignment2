import React from "react";
import FannedBookCard from "./FannedBookCover";

export default function HeroSection() {
  return (
    <section className="px-6 py-8 md:flex justify-between items-center bg-[#E4E4E7] h-fit">
      <div className="md:w-1/2">
        <h2 className="text-3xl md:text-4xl font-bold leading-tight">
          Buy and sell your{" "}
        </h2>
        <h2 className=" text-3xl md:text-4xl font-bold leading-tight">
          books <span className="text-[#6366F1]">for the best </span>
        </h2>
        <h2 className="text-3xl md:text-4xl font-bold leading-tight text-[#6366F1]">
          prices
        </h2>
        <p className="text-sm mt-4 text-gray-600">
          Find and read more you'll love, and keep track of the books you want
          to read. Be part of the world’s largest community of book lovers on
          Goodreads.
        </p>
        <div className="mt-4 flex items-center border rounded px-3 py-2 bg-white w-full md:w-96">
          <input
            type="text"
            placeholder="Search for Books..."
            className="w-full outline-none text-sm"
          />
          <button className="text-sm px-2 py-1 text-[#6366F1] rounded">
            ...
          </button>
        </div>
      </div>
      <div className="mt-6 md:mt-0 md:w-1/2 flex justify-center">
        
        <FannedBookCard />
      </div>
    </section>
  );
}
