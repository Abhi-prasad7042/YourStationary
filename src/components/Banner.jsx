import React from 'react';
import { bannerImage2 } from "../utils/constant";

const Banner = () => {
  return (
    <div className="relative w-full h-72 bg-cover bg-center mx-auto bg-black" style={{ backgroundImage: `url(${bannerImage2})` }}>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-black bg-opacity-50 text-white text-center p-4 rounded mx-4 sm:mx-8 md:mx-12 lg:mx-16 mt-72">
          <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold mb-2 animate-blur-in text-green-400">
            Find Your Stationery Here
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl animate-blur-in">
            Your Store
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
