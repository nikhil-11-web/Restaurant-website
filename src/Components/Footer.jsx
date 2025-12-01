import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
// FIX: Changed path from './Components/FooterOverlay' to './FooterOverlay'
import FooterOverlay from './FooterOverlay'; 

const Footer = () => {
  return (
    <div className="relative w-full z-10 bg-[#0C0C0C] pt-16 px-4 sm:px-8 md:px-16 lg:px-24 flex flex-col justify-start items-center" id="login">
      
      {/* Background Overlay */}
      <FooterOverlay />

      {/* Newsletter Section */}
      <div className="w-full max-w-[1000px] border border-[#DCCA87] p-4 text-center mb-16 bg-black z-10">
         <h2 className="text-[#DCCA87] font-cormorant text-2xl">Subscribe to our Newsletter</h2>
         <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-4">
            <input type="email" placeholder="Email Address" className="bg-transparent border border-[#F5EFDB] text-white p-2 w-full md:w-[62%] font-opensans" />
            <button type="button" className="bg-[#DCCA87] text-black font-cormorant px-4 py-2 font-bold">Subscribe</button>
         </div>
      </div>

      {/* Footer Links */}
      <div className="w-full flex flex-col lg:flex-row justify-between items-start mt-8 gap-12 lg:gap-0 text-center lg:text-left z-10">
        
        {/* Contact Us */}
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

        {/* Logo and Quote */}
        <div className="flex-1 w-full flex flex-col items-center text-center gap-4">
          <img 
            src="/images/gericht.png" 
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
          />
          
          <div className="flex flex-row gap-4 mt-4">
            <FiFacebook className="text-white text-2xl hover:text-[#DCCA87] transition-colors cursor-pointer" />
            <FiTwitter className="text-white text-2xl hover:text-[#DCCA87] transition-colors cursor-pointer" />
            <FiInstagram className="text-white text-2xl hover:text-[#DCCA87] transition-colors cursor-pointer" />
          </div>
        </div>

        {/* Working Hours */}
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

      {/* Copyright */}
      <div className="mt-16 mb-8 w-full z-10">
         <p className="text-[#AAAAAA] font-sans text-center">
            2024 Gerícht. All Rights reserved.
         </p>
      </div>

    </div>
  );
};

export default Footer;