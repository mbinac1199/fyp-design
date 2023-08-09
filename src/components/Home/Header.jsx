import React from "react";
import header from "../../assets/header.jpg";

function Header() {
  return (
    <div className="relative">
      <img
        className="w-full h-screen brightness-50 object-cover"
        src={header}
      />
      <div className="absolute left-0 top-0 w-full p-14 lg:p-28 h-full flex flex-col justify-center items-center text-white text-center">
        <p className="text-2xl lg:text-3xl text-zinc-100">Welcome to</p>
        <h1 className="text-4xl lg:text-7xl font-bold mt-2 mb-5">
          Virtual Interior Design
        </h1>
        <p className="lg:text-lg text-zinc-200">
          The ultimate online marketplace for buying and selling furniture!
          Discover a wide range of stylish pieces and bring your interior dreams
          to life. With our cutting-edge 3D visualization feature, envision how
          the furniture will fit perfectly in your space. Start exploring today!
        </p>
        <div className="flex gap-3 mt-3">
          <button className="transition-colors duration-200 border-2 border-zinc-200 py-1 px-3 rounded-lg font-medium hover:bg-zinc-200 hover:text-black">
            Become a Seller
          </button>
          <button className="transition-colors duration-200 bg-orange-600 py-2 px-4 rounded-lg font-medium hover:bg-orange-500">
            Explore Furniture
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
