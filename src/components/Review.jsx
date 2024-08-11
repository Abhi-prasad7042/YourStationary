import React, { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { ReviewData } from '../utils/constant';

function Review() {
  useEffect(() => {
    // Initialize Swiper after the component mounts
    new Swiper('.mySwiper', {
      slidesPerView: 1,
      spaceBetween: 10,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      },
    });
  }, []); // Empty dependency array ensures this runs only once

  return (
    <section className="p-10">
      <h2 className="text-3xl font-bold text-center text-[#d683ff] mb-8">
        What Our Clients Say
      </h2>
      <div className="swiper mySwiper">
        <div className="swiper-wrapper">
          {ReviewData.map((review, index) => (
            <div key={index} className="swiper-slide py-4 px-3 text-white bg-gray-800 rounded-lg">
              <img src={review.img} alt={`Review by ${review.name}`} className="w-full h-auto mb-4" />
              <p className="text-sm px-2 my-5 text-justify">{review.text}</p>
              <h5 className="text-[#d683ff] mb-2">{review.name}</h5>
              <p className="text-sm px-2">{review.role}</p>
            </div>
          ))}
        </div>
        {/* Pagination Container */}
        <div className="swiper-pagination"></div>
      </div>
    </section>
  );
}

export default Review;
