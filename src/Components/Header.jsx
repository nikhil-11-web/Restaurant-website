import React from 'react';

const accentColor = 'text-[#DCCA87]'; 
const textColor = 'text-white';

const SubHeading = ({ title }) => {
  return (
 
    <div className="mb-4 flex flex-col items-start">
      <p className={`font-cormorant text-xl tracking-wider italic ${accentColor}`}>
        {title}
      </p>
      
      <img 
        src="/images/spoon.png" 
        alt="Spoon" 
        className='w-[45px] h-auto mt-2 object-contain'
        onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/45x15/000000/DCCA87?text=-"; }}
      />
    </div>
  );
}


const CustomButton = ({ children }) => (
  <button 
    type="button" 
    className="bg-[#DCCA87] text-black font-cormorant text-lg font-bold py-2.5 px-8 mt-6 rounded-md transition-all duration-300 shadow-xl hover:bg-orange-300 hover:text-orange-700 hover:shadow-2xl"
  >
    {children}
  </button>
);


const Header = () => {
  return (
    
    <div id="home" className='w-full min-h-screen bg-black flex justify-center items-center py-8 px-6 sm:px-16 md:px-20'>
      
      <div className='w-full max-w-7xl flex flex-col md:flex-row justify-between items-center gap-10 md:gap-20'>
        <div className='flex-1 flex flex-col items-start text-left order-2 md:order-1'>
          
          <SubHeading title="Chase the new flavour"/>
          <h1 className={`font-cormorant ${textColor} text-6xl sm:text-7xl md:text-8xl font-extrabold tracking-tight leading-tight`}>
            The Key to Fine Dining
          </h1>
          <p className='text-gray-400 font-opensans text-base mt-6 leading-relaxed'>
            Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus.
          </p>

          <CustomButton>
            Explore Menu
          </CustomButton>

        </div>

        <div className='flex-1 flex justify-center items-center order-1 md:order-2 mt-8 md:mt-0'>
          <img 
            src="public/images/welcome.png" 
            alt="Header Fine Dining" 
            className='w-full max-w-sm md:max-w-md lg:max-w-lg object-contain rounded-lg shadow-2xl border-2 border-[#DCCA87]/30'
            onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x700/000000/DCCA87?text=Placeholder"; }}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;