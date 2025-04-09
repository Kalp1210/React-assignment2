import React from "react";
import cover from "../assets/bookCover.png";
import cover2 from "../assets/cover2.png";
import cover3 from "../assets/cover3.png";

export default function FannedCardStack() {
  return (
    <div className="relative w-48 h-72 mx-auto">
      <img
        src={cover3}
        alt="book layer 2"
        className="absolute left-4 top-0 w-full h-full object-cover rounded-xl shadow z-0 rotate-3"
      />

      <img
        src={cover2}
        alt="book layer 1"
        className="absolute left-2 top-0 w-full h-full object-cover rounded-xl shadow z-10 rotate-1"
      />

      <img
        src={cover}
        alt="main book"
        className="relative w-full h-full object-cover rounded-xl shadow-xl z-20"
      />
    </div>
  );
}
