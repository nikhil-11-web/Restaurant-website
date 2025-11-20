import React from 'react';

const SubHeading = ({ title }) => (
  <div className="mb-8 flex flex-col items-start">
    <p className="font-cormorant text-xl font-bold tracking-wider text-white capitalize">
      {title}
    </p>
    <img 
      src="/images/spoon.png" 
      alt="spoon" 
      className="w-[45px] mt-2" 
    />
  </div>
);

const CustomButton = ({ children }) => (
  <button 
    type="button" 
    className="bg-[#DCCA87] text-black font-cormorant text-base font-bold py-3 px-8 mt-8 rounded-sm transition-all duration-300 hover:bg-white hover:text-black shadow-lg"
  >
    {children}
  </button>
);

const FindUs = () => {
  return (
    <div 
      
      className="bg-[url('/images/bg.png')] bg-cover bg-center bg-no-repeat w-full min-h-[85vh] flex justify-center items-center py-16 px-4 sm:px-8 lg:px-24" 
      id="contact"
    >
      
      <div className="w-full max-w-[1300px] flex flex-col md:flex-row justify-between items-center gap-16">
        
   
        <div className="flex-1 w-full flex flex-col items-start text-left order-2 md:order-1">
          
          <SubHeading title="Contact" />
          
          <h1 className="font-cormorant text-[#DCCA87] text-5xl md:text-7xl font-bold leading-tight mb-8">
            Find Us
          </h1>
          
          <div className="content-wrapper">
            <p className="font-sans text-[#AAAAAA] text-base leading-relaxed mb-8">
              Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG
            </p>
            
       
            <div className="flex flex-col gap-4">
              <p className="font-cormorant text-[#DCCA87] text-2xl font-bold">
                Opening Hours
              </p>
              <p className="font-sans text-white text-base">
                Mon - Fri: 10:00 am - 02:00 am
              </p>
              <p className="font-sans text-white text-base">
                Sat - Sun: 10:00 am - 03:00 am
              </p>
            </div>
          </div>

          <CustomButton>
            Visit Us
          </CustomButton>

        </div>

       
        <div className="flex-1 w-full flex justify-center items-center order-1 md:order-2">

          <img 
            src="/images/findus.png" 
            alt="find_us" 
            className="w-full md:w-[80%] object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
          />
        </div>

      </div>
    </div>
  );
}

export default FindUs;