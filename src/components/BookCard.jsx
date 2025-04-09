import React from "react";
import { FaStar, FaShoppingCart } from "react-icons/fa";

export default function BookCard({ book }) {
  const { title, author, rating, description, buttonText, image } = book;

  return (
    <div className="bg-indigo-50 rounded-2xl shadow p-4 w-[250px] h-[400px] mx-auto flex flex-col justify-between">
      <img
        src={image}
        alt={title}
        className="h-52 object-contain rounded-3xl"
      />
    
      <div className="mt-4">
        <h3 className="font-semibold text-lg text-gray-800 leading-tight">
          {title}
        </h3>
        <p className="text-sm text-[#818CF8] font-medium">
          {author}
          <span className="inline-flex items-center ml-2">
            {[...Array(rating)].map((_, i) => (
              <FaStar key={i} className="text-[#84CC16] text-xs" />
            ))}
            <FaStar className="text-indigo-300 text-xs" />
          </span>
        </p>
        <p className="text-sm text-gray-600 mt-2 line-clamp-3">{description}</p>
      </div>

      <button className="mt-4 flex items-center justify-center gap-2 bg-black text-white py-2 px-4 rounded hover:bg-gray-900 text-sm">
        <FaShoppingCart /> {buttonText}
      </button>
    </div>
  );
}
