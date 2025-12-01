import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className='w-full flex justify-between items-center bg-black px-4 sm:px-8 py-4 border-b border-[#DCCA87]/20 sticky top-0 z-50'>
      
      <div className='flex justify-start items-center'>
        <img className='w-[140px] sm:w-[180px] h-auto' src="/images/gericht.png" alt="App Logo" />
      </div>

      <ul className='hidden lg:flex flex-1 justify-center items-center list-none'>
        {['Home', 'About', 'Menu', 'Awards', 'Contact'].map((item) => (
          <li key={item} className='mx-4 cursor-pointer hover:text-gray-300 font-sans text-base text-white transition-colors duration-300'>
            <a href={`#${item.toLowerCase()}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className='hidden lg:flex justify-end items-center'>
        <a href="#login" className='mx-4 font-sans text-base text-white hover:text-[#DCCA87] transition-colors duration-300'>Log In / Registration</a>
        <div className='w-[1px] h-[30px] bg-gray-500' />
        <a href="#book" className='mx-4 font-sans text-base text-white hover:text-[#DCCA87] transition-colors duration-300'>Book Table</a>
      </div>

      {/* Mobile Menu */}
      <div className='lg:hidden flex relative'>
        <GiHamburgerMenu 
          color="#fff" 
          fontSize={27} 
          className="cursor-pointer" 
          onClick={() => setToggleMenu(true)} 
        />
        
        {toggleMenu && (
          <div className='fixed top-0 left-0 w-full h-[100vh] bg-black transition duration-500 flex flex-col justify-center items-center z-[60] slide-bottom'>
            <MdOutlineRestaurantMenu 
              fontSize={27} 
              className="text-[#DCCA87] cursor-pointer absolute top-5 right-5" 
              onClick={() => setToggleMenu(false)} 
            />
            <ul className='list-none'>
              {['Home', 'About', 'Menu', 'Awards', 'Contact'].map((item) => (
                <li key={item} className='m-8 cursor-pointer text-[#DCCA87] text-2xl text-center font-cormorant hover:text-white' onClick={() => setToggleMenu(false)}>
                  <a href={`#${item.toLowerCase()}`}>{item}</a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;