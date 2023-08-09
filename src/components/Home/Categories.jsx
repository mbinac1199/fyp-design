import React from "react";
import dining from "../../assets/dining.jpg";

function Categories() {
  const categories = [
    {
      id: 0,
      title: "Dining",
      img: dining,
    },
    {
      id: 1,
      title: "Dining",
      img: dining,
    },
    {
      id: 2,
      title: "Dining",
      img: dining,
    },
    {
      id: 3,
      title: "Dining",
      img: dining,
    },
    {
      id: 4,
      title: "Dining",
      img: dining,
    },
    {
      id: 5,
      title: "Dining",
      img: dining,
    },
  ];

  return (
    <div className="py-20 px-32">
      <h2 className="text-center text-5xl font-bold mt-2 mb-10">
        Explore Categories
      </h2>
      <div className="grid grid-cols-3 gap-4 mt-3">
        {categories.map((category) => (
          <div
            key={category.id}
            className="flex justify-center items-center flex-col relative transition duration-300 scale-100 hover:scale-110"
          >
            <img src={category.img} className="w-60 h-60" />
            <div className="absolute top-0 left-0 h-full w-full flex items-center justify-center"></div>
            <h3 className="text-lg font-medium pb-8">{category.title}</h3>
            <div className="transition-colors duration-300 absolute top-0 left-0 hover:bg-zinc-200 rounded-lg h-full w-full opacity-25"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
