import React from 'react';

const HeroBanner: React.FC = () => {
  return (
    <div className="bg-[#40BFFF]  mb-8 relative overflow-hidden">
      <div className="flex flex-col md:flex-row mt-16 px-10 items-end justify-between">
        {/* Content */}
        <div className="text-white z-10 mb-6 md:mb-0 p-8 md:p-12 max-w-lg">
          <h1 className="text-3xl md:text-4xl font-medium tracking-wide mb-2">
            Adidas Men Running
          </h1>
          <h2 className="text-2xl md:text-4xl font-medium mb-4">Sneakers</h2>
          <p className="text-lg mb-6 font-extralight tracking-wide opacity-80">
            Performance and design. Taken right to the edge.
          </p>
          <button className="border-b-1 text-sm border-white text-white tracking-wide font-semibold cursor-pointer inline-flex items-center space-x-2">
            <span>SHOP NOW</span>
          </button>
        </div>

        {/* Image */}
        <div className="relative mr-16">
          <img
            src="./public/shoe.png"
            alt="Adidas Sneaker"
            className="w-64 md:w-96 h-80 object-contain "
          />
        </div>
      </div>

      
    </div>
  );
};

export default HeroBanner;