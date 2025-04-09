import React from "react";
import { FaShoppingCart } from "react-icons/fa";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-6 py-4 border-b border-gray-200 bg-[#E4E4E7]">
      <h1 className="text-2xl font-bold text-[#1E1B4B]">Books</h1>
      <nav className="flex gap-4 text-sm">
        <a
          href="#"
          className="text-[#1E1B4B] hover:text-blue-600 hover:underline"
        >
          HOME
        </a>
        <a
          href="#"
          className="text-[#1E1B4B] hover:text-blue-600 hover:underline"
        >
          EXPLORE
        </a>
        <a
          href="#"
          className="text-[#1E1B4B] hover:text-blue-600 hover:underline"
        >
          SHOP
        </a>
        <a
          href="#"
          className="text-[#1E1B4B] hover:underline hover:text-blue-600"
        >
          SELL YOUR BOOK
        </a>
      </nav>
      <FaShoppingCart className="text-lg text-[#1E1B4B] " />
    </header>
  );
}
