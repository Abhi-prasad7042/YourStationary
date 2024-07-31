import React from 'react';

const Meteors = () => {
  return (
    <div className="relative w-full h-96">
      <div className="absolute top-0 left-0 w-2 h-2 bg-white rounded-full animate-meteor"></div>
      <div className="absolute top-0 left-1/4 w-2 h-2 bg-white rounded-full animate-meteor delay-1000"></div>
      <div className="absolute top-0 left-1/2 w-2 h-2 bg-white rounded-full animate-meteor delay-2000"></div>
      <div className="absolute top-0 left-3/4 w-2 h-2 bg-white rounded-full animate-meteor delay-3000"></div>
    </div>
  );
};

export default Meteors;
