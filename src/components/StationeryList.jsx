import React, { useState } from 'react';
import { DATA } from '../utils/constant';

const INITIAL_ITEMS = 6;

const StationeryList = () => {
  const [showAll, setShowAll] = useState(false); // State to toggle view

  // Show items based on whether "View All" is toggled
  const itemsToDisplay = showAll ? DATA : DATA.slice(0, INITIAL_ITEMS);

  return (
    <div>
      <div className="p-3 mt-10 text-black flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-8 text-[#d683ff]">
          Featured Products
        </h2>
        <div className="flex flex-wrap gap-12 w-full max-w-[1350px] justify-center">
          {itemsToDisplay.map((item, index) => (
            <div
              key={index}
              className="w-[300px] h-[370px] p-2 rounded-lg flex flex-col items-center transition-shadow duration-300 hover:scale-102 hover:shadow-custom-light-lg cursor-pointer"
            >
              <div className="mb-4 w-full h-44">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <h2 className="text-xl font-bold text-center mb-1 text-[#D388F8]">{item.name}</h2>
              <p className="text-gray-400 text-center text-sm mb-1">{item.description}</p>
              <div className='flex justify-around items-center w-full mb-2'>
                <p className="text-white font-bold">${item.price.toFixed(2)}</p>
                <p className="text-yellow-500">Rating: {item.rating} / 5</p>
              </div>
              <button className='bg-[#ebe157] text-black px-4 py-2 rounded-xl hover:bg-[#FFEF20] transition duration-300'>
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        {/* View All Button
        {!showAll && DATA.length > INITIAL_ITEMS && (
          <button
            onClick={() => setShowAll(true)}
            className="bg-gray-700 text-white px-4 py-2 rounded-lg mt-4 hover:bg-gray-600 transition duration-300"
          >
            View All
          </button>
        )}

        Show Less Button
        {showAll && (
          <button
            onClick={() => setShowAll(false)}
            className="bg-gray-700 text-white px-4 py-2 rounded-lg mt-4 hover:bg-gray-600 transition duration-300"
          >
            Show Less
          </button>
        )}
        */}
      </div>
    </div>
  );
};

export default StationeryList;
