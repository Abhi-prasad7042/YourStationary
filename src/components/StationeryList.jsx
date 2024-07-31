import React from 'react';
import { DATA } from '../utils/constant';

const StationeryList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-5 sm:px-20 p-4 mt-16">
      {DATA.map((item, index) => (
        <div key={index} className="border p-4 rounded-lg shadow-xl w-72 h-92 flex flex-col">
          <div className="relative w-full h-40 mb-4">
            <img
              src={item.img}
              alt={item.name}
              className="absolute inset-0 w-full h-full object-cover"
              style={{ objectFit: 'cover' }} // Ensures images cover the container
            />
          </div>
          <h2 className="text-xl font-bold">{item.name}</h2>
          <p className="text-gray-700">{item.description}</p>
          <p className="text-gray-900 font-bold mb-2">${item.price.toFixed(2)}</p>
          <div className='flex items-center justify-between'>
            <p className="text-yellow-500">Rating: {item.rating} / 5</p>
            <button className='bg-green-400 text-white px-2 py-1 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300'>Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StationeryList;
