import React, { useState } from 'react';


const accentHex = '#DCCA87'; 
const primaryColor = 'text-[#DCCA87]';
const secondaryColor = 'text-white';
const hoverEffect = 'hover:text-gray-400 transition-colors duration-300';
const linkStyles = `mx-4 ${secondaryColor} text-lg font-normal ${hoverEffect}`;

const HamburgerIcon = ({ onClick, color, size = 27, className = '' }) => (
  <svg 
    onClick={onClick}
    className={`cursor-pointer ${className}`}
    fill={color}
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    width={size} 
    height={size}
  >
    <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/>
  </svg>
);


const CloseMenuIcon = ({ onClick, color, size = 27, className = '' }) => (
  <svg 
    onClick={onClick}
    className={`cursor-pointer ${className}`}
    fill={color}
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    width={size} 
    height={size}
  >
    <path d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59 7.11 5.7a.996.996 0 1 0-1.41 1.41L10.59 12l-4.89 4.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.997.997 0 0 0 1.41 0c.39-.39.39-1.03 0-1.42L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"/>
  </svg>
);


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    
    <nav className='w-full flex justify-between items-center bg-black px-6 py-4 border-b border-[#DCCA87]/20 sticky top-0 z-50'>
      
      <div className='flex items-center'>
        <img className='w-[150px] sm:w-[180px] h-auto' src="/images/gericht.png" alt="App Logo" />
      </div>

      <ul className='hidden lg:flex flex-row items-center list-none'>
        <li className={linkStyles}><a href="#home">Home</a></li>
        <li className={linkStyles}><a href="#about">About</a></li>
        <li className={linkStyles}><a href="#menu">Menu</a></li>
        <li className={linkStyles}><a href="#awards">Awards</a></li>
        <li className={linkStyles}><a href="#contact">Contact</a></li>
      </ul>

      <div className='hidden lg:flex items-center text-white text-lg font-normal'>
        <a href="#login" className={`mx-4 ${secondaryColor} ${hoverEffect}`}>Log In / Registration</a>

        <div className='w-[1px] h-7 bg-gray-600 mx-4'></div>
        <a href="#book" className={`mx-4 ${primaryColor} ${hoverEffect} py-2 px-3 rounded-lg border border-transparent hover:border-[#DCCA87]/50`}>Book Table</a>
      </div>

      <div className='flex lg:hidden'>
        <HamburgerIcon 
          color={accentHex}
          size={27}
          onClick={() => setToggleMenu(true)} 
        />
      
        {toggleMenu && (
          <div className='fixed inset-0 bg-black flex flex-col justify-center items-center animate-slide-in'>
            
            <CloseMenuIcon 
              color={accentHex}
              size={27}
              className='absolute top-5 right-5'
              onClick={() => setToggleMenu(false)} 
            />
          
            <ul className='flex flex-col text-center list-none p-4'>
              
              <li className={`my-4 text-3xl ${primaryColor} ${hoverEffect}`} onClick={() => setToggleMenu(false)}><a href="#home">Home</a></li>
              <li className={`my-4 text-3xl ${primaryColor} ${hoverEffect}`} onClick={() => setToggleMenu(false)}><a href="#about">About</a></li>
              <li className={`my-4 text-3xl ${primaryColor} ${hoverEffect}`} onClick={() => setToggleMenu(false)}><a href="#menu">Menu</a></li>
              <li className={`my-4 text-3xl ${primaryColor} ${hoverEffect}`} onClick={() => setToggleMenu(false)}><a href="#awards">Awards</a></li>
              <li className={`my-4 text-3xl ${primaryColor} ${hoverEffect}`} onClick={() => setToggleMenu(false)}><a href="#contact">Contact</a></li>
              
              <div className='mt-8 pt-4 border-t border-gray-700 flex flex-col items-center'>
                <a href="#login" className={`my-2 text-xl ${secondaryColor} ${hoverEffect}`} onClick={() => setToggleMenu(false)}>Log In / Registration</a>
                <a href="#book" className={`my-2 text-xl ${primaryColor} ${hoverEffect}`} onClick={() => setToggleMenu(false)}>Book Table</a>
              </div>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}


export default Navbar;