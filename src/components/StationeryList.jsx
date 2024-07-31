import React, { useState, useEffect } from 'react';
import { DATA } from '../utils/constant';

const ITEMS_PER_PAGE = 12;

const StationeryList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [fade, setFade] = useState(false);

  // Calculate the items to display based on the current page
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = DATA.slice(indexOfFirstItem, indexOfLastItem);

  // Calculate the total number of pages
  const totalPages = Math.ceil(DATA.length / ITEMS_PER_PAGE);

  // Change page handler
  const handlePageChange = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setFade(true); // Trigger fade out animation
      setTimeout(() => {
        setCurrentPage(pageNumber);
        setFade(false); // Reset fade state
      }, 500); // Match duration with animation
    }
  };

  // Scroll to the top of the page whenever currentPage changes
  useEffect(() => {
    if (fade) {
      window.scrollTo(0, 0); // Scroll to top while fading out
    }
  }, [fade]);

  return (
    <div className="p-4">
      <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:px-20 mt-16 ${fade ? 'animate-blurOut' : 'animate-blurIn'}`}>
        {currentItems.map((item, index) => (
          <div key={index} className="border p-4 rounded-lg hover:shadow-2xl shadow-custom cursor-default flex flex-col items-center">
            <div className="relative w-full h-40 mb-4">
              <img
                src={item.img}
                alt={item.name}
                className="absolute inset-0 w-full h-full object-cover"
                style={{ objectFit: 'cover' }} // Ensures images cover the container
              />
            </div>
            <h2 className="text-xl font-bold text-center">{item.name}</h2>
            <p className="text-gray-700">{item.description}</p>
            <p className="text-gray-900 font-bold text-start w-full">${item.price.toFixed(2)}</p>
            <div className='flex items-center justify-between w-full'>
              <p className="text-yellow-500">Rating: {item.rating} / 5</p>
              <button className='bg-green-400 text-white px-2 py-1 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition duration-300'>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-6">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="bg-gray-800 text-white px-4 py-2 rounded-lg mx-2 hover:bg-gray-700 transition duration-300 disabled:opacity-50"
        >
          Previous
        </button>
        <span className="flex items-center mx-2">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="bg-gray-800 text-white px-4 py-2 rounded-lg mx-2 hover:bg-gray-700 transition duration-300 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default StationeryList;
