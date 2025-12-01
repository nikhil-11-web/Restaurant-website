import React from 'react';
import SubHeading from './SubHeading';

const Header = () => {
  return (
    <div id="home" className='bg-black w-full min-h-screen flex justify-center items-center py-16 px-4 sm:px-8 lg:px-24'>
      <div className='w-full max-w-7xl flex flex-col lg:flex-row justify-between items-center gap-12'>
        
        {/* Left Side: Text */}
        <div className='flex-1 w-full flex flex-col items-start'>
          <SubHeading title="Chase the new flavour" />
          <h1 className='font-cormorant text-[#DCCA87] text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight leading-[117%] uppercase mb-8'>
            The Key to Fine Dining
          </h1>
          <p className='font-opensans text-[#AAAAAA] text-base leading-relaxed mb-8' style={{ margin: '2rem 0' }}>
            Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus.
          </p>
          <button type="button" className="bg-[#DCCA87] text-black font-cormorant font-bold py-3 px-8 rounded-sm hover:bg-white transition duration-300">
            Explore Menu
          </button>
        </div>

        {/* Right Side: Image */}
        <div className='flex-1 w-full flex justify-center items-center'>
          <img 
            src="/images/welcome.png" 
            alt="header_img" 
            className='w-[80%] lg:w-full object-contain' 
          />
        </div>
      </div>
    </div>
  );
};

export default Header;