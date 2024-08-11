import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Banner = () => {
  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between p-6 md:p-12">
        {/* Left Section - Text Content */}
        <div className="text-left md:w-1/2 w-full mb-6 md:mb-0 sm:mt-0 mt-5">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-[#D388F8]">Find Your Stationery Here</h1>
          <p className="text-lg text-white sm:text-xl mb-6">Discover an exquisite range of stationery products tailored for every need. Shop online and elevate your writing experience!</p>
          <button className="bg-[#FFEF20] text-black py-1 sm:py-2 px-4 sm:px-4 rounded text-base sm:text-lg font-semibold hover:bg-[#E86B00">
            Shop Now
          </button>
          <p className="mt-4 text-base sm:text-lg text-white">⭐⭐⭐⭐⭐ 4.5 / 5 (<span className='text-[#D388F8]'>Based on 150 Reviews</span>)</p>
        </div>

        <div className="md:w-1/2 w-full flex justify-center">
          <div className="w-full max-w-[500px] h-[250px] sm:h-[300px] md:h-[350px] bg-gray-300 overflow-hidden rounded-lg flex items-center justify-center relative" >
          <img src="./ban.png" className="w-full h-full" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
