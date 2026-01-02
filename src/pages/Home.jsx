import React from "react";
import Slider from "../components/Slider";
import Products from "../components/Products";

const Home = () => {
  return (
    <>
      <Slider />
      <div className="bg-white pt-4">
        <h2 className="text-black text-center font-bold text-4xl">
          Feature Products
        </h2>
      </div>
      <Products start={4} />
    </>
  );
};

export default Home;
