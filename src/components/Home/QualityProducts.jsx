import React from "react";
import quality from "../../assets/quality.jpg";

function QualityProducts() {
  return (
    <div className="">
      <div className="grid grid-cols-2 gap-4">
        <img src={quality} className="h-full w-full" />
        <div className="flex flex-col h-full justify-center px-6">
          <h4 className="text-4xl font-bold">Quality Products</h4>
          <p className="mt-5 pr-10">
            We pride ourselves on ensuring that every product listed on our
            marketplace meets the highest standards of quality. Our dedicated
            team diligently vets each seller and their offerings to guarantee
            that only the finest furniture finds its way to our platform. From
            exquisite craftsmanship to durable materials, we prioritize
            delivering products that will stand the test of time.
          </p>
        </div>
      </div>
    </div>
  );
}

export default QualityProducts;
