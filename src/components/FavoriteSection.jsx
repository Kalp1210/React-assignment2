import React from "react";
import bookList from "../assets/bookList.png";

export default function FavoriteSection() {
  return (
    <section className="px-6 py-12 bg-white flex flex-col md:flex-row items-center gap-10">
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={bookList}
          alt="Book Grid"
          className="rounded-lg max-w-[360px] w-full"
        />
      </div>

    
      <div className="w-full md:w-1/2">
        <h2 className="text-3xl font-bold text-gray-900">
          Find Your Favorite <br />
          <span className="text-[#6366F1]">Book Here!</span>
        </h2>

        <p className="text-sm text-gray-600 mt-4 leading-relaxed max-w-md">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo ad non
          reprehenderit. Reiciendis illo iusto incidunt distinctio
          exercitationem officiis dicta dolores dolorem ea! Non saepe,
          voluptatum cupiditate beatae in dolore!
        </p>

        {/* Stats */}
        <div className="flex flex-wrap gap-10 mt-6">
          <div>
            <p className="text-2xl font-bold text-gray-900">800+</p>
            <p className="text-gray-600">Book Listing</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-900">550+</p>
            <p className="text-gray-600">Register User</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-900">1,200+</p>
            <p className="text-gray-600">Books Sold</p>
          </div>
        </div>

     
        <button className="mt-6 px-5 py-2 bg-[#6366F1] text-white rounded hover:bg-indigo-600 text-sm font-medium">
          Explore Now
        </button>
      </div>
    </section>
  );
}
