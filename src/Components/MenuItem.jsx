import React from 'react';

const MenuItem = ({ title, price, tags }) => (
  <div className="flex flex-col w-full my-2">
    <div className="flex flex-row justify-between items-center">
      <div className="flex-1">
        <p className="font-cormorant text-[#DCCA87] text-xl md:text-2xl font-bold text-left">{title}</p>
      </div>
      <div className="w-[90px] h-[1px] bg-[#DCCA87] mx-4" />
      <div className="flex justify-end items-end">
        <p className="font-cormorant text-white text-xl md:text-2xl font-bold">{price}</p>
      </div>
    </div>
    <div className="w-full mt-1">
      <p className="font-opensans text-[#AAAAAA] text-sm md:text-base">{tags}</p>
    </div>
  </div>
);

export default MenuItem;
