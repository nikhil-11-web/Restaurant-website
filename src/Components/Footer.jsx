import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import FooterOverlay from './FooterOverlay';

const Footer = () => {
  return (
    <div className="relative w-full z-10 bg-[#0C0C0C] pt-16 px-4 sm:px-8 md:px-16 lg:px-24 flex flex-col justify-start items-center" id="login">
      
      
      <FooterOverlay />

      
      <div className="w-full max-w-[1000px] border border-[#DCCA87] p-4 text-center mb-16 bg-black">
         <h2 className="text-[#DCCA87] font-cormorant text-2xl">Subscribe to our Newsletter</h2>
      </div>


     
      <div className="w-full flex flex-col lg:flex-row justify-between items-start mt-8 gap-12 lg:gap-0 w-full text-center lg:text-left">
        
        
        <div className="flex-1 w-full flex flex-col items-center text-center">
          <h1 className="text-white font-cormorant text-3xl mb-4 font-medium capitalize">
            Contact Us
          </h1>
          <p className="text-[#AAAAAA] font-sans text-base mb-2">
            9 W 53rd St, New York, NY 10019, USA
          </p>
          <p className="text-[#AAAAAA] font-sans text-base mb-2">
            +1 212-344-1230
          </p>
          <p className="text-[#AAAAAA] font-sans text-base">
            +1 212-555-1230
          </p>
        </div>

      
        <div className="flex-1 w-full flex flex-col items-center text-center gap-4">
          <img 
            src="public/images/gericht.png" 
            alt="footer_logo" 
            className="w-[210px] mb-2" 
          /> 
         
          <img 
            src="public/images/logo (2).png" 
            alt="footer_logo" 
            className="w-[210px] mb-2" 
          /> 
          <p className="text-white font-cormorant text-base">
            "The best way to find yourself is to lose yourself in the service of others."
          </p>
          <img 
            src="/images/spoon.png" 
            alt="spoon" 
            className="w-[45px] mt-2 mb-2" 
            style={{ marginTop: 15 }} 
          />
          
        
          <div className="flex flex-row gap-4 mt-4">
            <FiFacebook className="text-white text-2xl hover:text-[#e58c0f] transition-colors cursor-pointer" />
            <FiTwitter className="text-white text-2xl hover:text-[#e58c0f] transition-colors cursor-pointer" />
            <FiInstagram className="text-white text-2xl hover:text-[#e58c0f] transition-colors cursor-pointer" />
          </div>
        </div>


        <div className="flex-1 w-full flex flex-col items-center text-center">
          <h1 className="text-white font-cormorant text-3xl mb-4 font-medium capitalize">
            Working Hours
          </h1>
          <p className="text-[#AAAAAA] font-sans text-base mb-2">
            Monday-Friday:
          </p>
          <p className="text-[#AAAAAA] font-sans text-base mb-4">
            08:00 am - 12:00 am
          </p>
          <p className="text-[#AAAAAA] font-sans text-base mb-2">
            Saturday-Sunday:
          </p>
          <p className="text-[#AAAAAA] font-sans text-base">
            07:00 am - 11:00 pm
          </p>
        </div>

      </div>

      <div className="mt-16 mb-8 w-full">
         <p className="text-[#AAAAAA] font-sans text-center">
            2024 Gerícht. All Rights reserved.
         </p>
      </div>

    </div>
  );
};

export default Footer;