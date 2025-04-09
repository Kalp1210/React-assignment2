import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import BookCard from "./BookCard";
import book from "../assets/book.png";

const books = [
  {
    title: "Cooking Made Easy",
    author: "Emily Clark",
    rating: 4,
    description: "Simple and delicious recipes for everyday cooking.",
    buttonText: "Add To Favourite",
    image: book,
  },
  {
    title: "Mystery of the Lost Island",
    author: "Jane Smith",
    rating: 4,
    description: "A gripping mystery novel that keeps you guessing till end",
    buttonText: "Add To Cart",
    image: book,
  },
  {
    title: "Shadows of Doubt",
    author: "Emma Watson",
    rating: 4,
    description: "A detective novel filled with twists and unexpected turns.",
    buttonText: "Add To Cart",
    image: book,
  },
  {
    title: "Taste of Italy",
    author: "Gina Rossi",
    rating: 4,
    description:
      "Authentic Italian recipes to bring the flavors of Italy home.",
    buttonText: "Add To Cart",
    image: book,
  },
  {
    title: "Cooking Made Easy",
    author: "Emily Clark",
    rating: 4,
    description: "Simple and delicious recipes for everyday cooking.",
    buttonText: "Add To Favourite",
    image: book,
  },
  {
    title: "Mystery of the Lost Island",
    author: "Jane Smith",
    rating: 4,
    description:
      "A gripping mystery novel that keeps you guessing till the end.",
    buttonText: "Add To Cart",
    image: book,
  },
  {
    title: "Shadows of Doubt",
    author: "Emma Watson",
    rating: 4,
    description: "A detective novel filled with twists and unexpected turns.",
    buttonText: "Add To Cart",
    image: book,
  },
  {
    title: "Taste of Italy",
    author: "Gina Rossi",
    rating: 4,
    description:
      "Authentic Italian recipes to bring the flavors of Italy home.",
    buttonText: "Add To Cart",
    image: book,
  },
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 768, min: 640 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
  },
};

export default function BestSellerCarousel() {
  return (
    <section className="py-10 px-4 bg-white">
      <h2 className="text-2xl font-bold text-center mb-6">Best Seller Books</h2>
      <style>
        {`
          .react-multi-carousel-dot button {
            background: #EEF2FF;
            
          }
          .react-multi-carousel-dot--active button {
            background: #6366F1;
          }
        `}
      </style>
      <Carousel
        responsive={responsive}
        infinite
        autoPlay={false}
        showDots={true}
        arrows={false}
        className="pb-10"
      >
        {books.map((book, index) => (
          <BookCard key={index} book={book} />
        ))}
      </Carousel>
    </section>
  );
}
