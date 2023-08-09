import React from "react";
import ToggleableInput from "../ToggleableInput";
import bed from "../../assets/bed.jpg";
import AddToCartCard from "../AddToCartCard";

function Listing() {
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
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-8 mt-8 gap-8">
        <div className="col-span-2 bg-gray-50 p-10 rounded-2xl sticky top-0 left-0">
          <div>
            <p className="text-lg text-orange-400 font-medium">
              Filter by price
            </p>
            <input className="w-full mt-3" type="range" />
          </div>
          <div>
            <p className="text-lg text-orange-400 font-medium mt-3">
              Product categories
            </p>
            <select className="w-full mt-3" name="" id="">
              <option value="">All</option>
              <option value="">Dining</option>
            </select>
          </div>
          <div>
            <p className="text-lg text-orange-400 font-medium mt-3">
              Material Type
            </p>
            <select className="w-full mt-3" name="" id="">
              <option value="">All</option>
              <option value="">Wood</option>
            </select>
          </div>
        </div>
        <div className="col-span-6">
          <h1 className="font-bold text-5xl text-orange-500">Search Title</h1>
          <div className="flex justify-end gap-2 items-center">
            <p className="font-medium text-black">Sort by</p>
            <div className="bg-gray-50 w-fit rounded-xl px-3 py-1">
              <select className="bg-gray-50 pr-2" name="" id="">
                <option value="">Popularity</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-4">
            {bestSellers.map((furniture) => (
              <AddToCartCard item={furniture} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Listing;
