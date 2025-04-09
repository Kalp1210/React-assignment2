import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import BestSellerCarousel from "./components/BestSellerCarousel";
import FavoriteSection from "./components/FavoriteSection";

export default function App() {
  return (
    <div className="font-sans bg-white min-h-screen w-full">
      <Header />
      <HeroSection />
      <BestSellerCarousel />
      <FavoriteSection />
    </div>
  );
}
