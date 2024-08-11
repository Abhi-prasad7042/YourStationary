import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles

const BannerCarousel = () => {
  return (
    <div className="carousel-container p-4 sm:-mt-24 ">
      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        interval={3000}
        className="rounded-lg overflow-hidden"
      >
        <div>
          <img src="https://plus.unsplash.com/premium_photo-1664303228218-c7eedbffe762?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3RhdGlvbmFyeXxlbnwwfHwwfHx8MA%3D%3D" alt="Banner 1"  className='w-[1200px] h-[400px]'/>
        </div>
        <div>
          <img src="https://s1.1zoom.me/b5560/317/Stationery_Pencils_Notepad_Magnifying_glass_530985_1920x1080.jpg" alt="Banner 2" className='w-[1200px] h-[400px]'/>
        </div>
        <div>
          <img src="https://s1.1zoom.me/big0/871/Stationery_Pencils_Paintbrush_532198_1365x1024.jpg" alt="Banner 3" className='w-[1200px] h-[400px]' />
        </div>
      </Carousel>
    </div>
  );
};

export default BannerCarousel;
