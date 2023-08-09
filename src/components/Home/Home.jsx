import React from "react";
import Header from "./Header";
import Categories from "./Categories";
import BestSellers from "./BestSellers";
import Recommended from "./Recommended";
import ThreeDimensionIntro from "./ThreeDimensionIntro";
import QualityProducts from "./QualityProducts";
import Footer from "../Footer";

function Home() {
  return (
    <>
      <Header />
      <Categories />
      <BestSellers />
      <Recommended />
      <ThreeDimensionIntro />
      <QualityProducts />
      <Footer />
    </>
  );
}

export default Home;
