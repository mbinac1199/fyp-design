import React from "react";
import bed from "../../assets/bed.jpg";
import AddToCartCard from "../AddToCartCard";

function BestSellers() {
  const bestSellers = [
    {
      id: 0,
      title: "Bed",
      price: 20,
      img: bed,
    },
    {
      id: 1,
      title: "Bed",
      price: 20,
      img: bed,
    },
    {
      id: 2,
      title: "Bed",
      price: 20,
      img: bed,
    },
    {
      id: 3,
      title: "Bed",
      price: 20,
      img: bed,
    },
    {
      id: 4,
      title: "Bed",
      price: 20,
      img: bed,
    },
    {
      id: 5,
      title: "Bed",
      price: 20,
      img: bed,
    },
  ];

  return (
    <div className="bg-gray-50 py-20 px-20">
      <h2 className="text-center text-5xl font-bold mt-2 mb-10">
        Best Selling Furniture
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8">
        {bestSellers.map((furniture) => (
          <AddToCartCard item={furniture} />
        ))}
      </div>
    </div>
  );
}

export default BestSellers;
