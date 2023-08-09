import React from "react";

function Footer() {
  const categories = [
    {
      id: 0,
      title: "Dining",
      link: "/",
    },
    {
      id: 1,
      title: "Dining",
      link: "/",
    },
    {
      id: 2,
      title: "Dining",
      link: "/",
    },
  ];
  return (
    <>
      <div className="bg-orange-600 text-white py-16 px-16">
        <p className="text-3xl">
          Unleash your creativity and find the perfect furniture for your space.
          Start searching on Furniture Hub today and transform your home into a
          haven of style and comfort.
        </p>
        <button className="transition-colors duration-200 border-2 border-white py-1 px-3 rounded-lg font-medium hover:bg-white hover:text-black mt-4">
          Explore Furniture
        </button>
      </div>
      <div className="bg-black py-20 px-16 text-white">
        <div className="grid grid-cols-4">
          <h5 className="text-4xl font-bold">Interior Virtual Design</h5>
          <div>
            <p className="text-2xl font-medium mb-2">Categories</p>
            {categories.map((category) => (
              <p className="mb-1 text-zinc-200 hover:text-orange-600 font-light">
                {category.title}
              </p>
            ))}
          </div>
          <div>
            <h5 className="text-2xl font-medium mb-2">Other Links</h5>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
