import React from 'react';

const accentColor = 'text-[#DCCA87]'; 
const textColor = 'text-white';

const MenuItem = ({ title, price, tags }) => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex justify-between items-center">
     
        <p className={`font-cormorant text-xl font-semibold ${accentColor} tracking-wider`}>
          {title}
        </p>
        
        <div className="w-16 h-[1px] bg-white opacity-50 mx-4 flex-shrink-0" />
        
        <p className={`font-cormorant text-xl font-semibold ${textColor}`}>
          {price}
        </p>
      </div>
      
      <div className='w-full mt-1'>
        <p className="text-gray-500 font-opensans text-sm italic">
          {tags}
        </p>
      </div>
    </div>
  );
}

export default MenuItem;
