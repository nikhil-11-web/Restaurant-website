import React from 'react';

const About = () => {
  return (
    <div className="relative bg-[url('/images/bg.png')] bg-cover bg-center bg-no-repeat flex justify-center items-center py-16 px-4 sm:px-8 lg:px-16" id="about">
      
      {/* G Overlay Letter */}
      <div className="absolute inset-0 flex justify-center items-center">
        <img src="/images/G.png" alt="G_overlay" className="w-[300px] md:w-[400px] h-auto opacity-20 z-0" />
      </div>

      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:flex lg:flex-row justify-between items-center z-10 gap-16">
        
        {/* About Us Side */}
        <div className="flex-1 flex flex-col justify-end items-end text-right">
          <h1 className="font-cormorant text-[#DCCA87] text-5xl font-bold capitalize">About Us</h1>
          <img src="/images/spoon.png" alt="about_spoon" className="w-[45px]" />
          <p className="font-opensans text-[#AAAAAA] text-base leading-relaxed my-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.
          </p>
          <button type="button" className="bg-[#DCCA87] text-black font-cormorant font-bold py-3 px-8 rounded-sm hover:bg-white transition">Know More</button>
        </div>

        {/* Center Knife Image */}
        <div className="flex justify-center items-center my-8 md:my-0 lg:mx-16 order-last md:order-none md:col-span-2 lg:order-none lg:flex-initial">
          <img src="/images/knife.png" alt="about_knife" className="h-[400px] lg:h-[550px] 2xl:h-[700px] object-contain" />
        </div>

        {/* History Side */}
        <div className="flex-1 flex flex-col justify-start items-start text-left">
          <h1 className="font-cormorant text-[#DCCA87] text-5xl font-bold capitalize">Our History</h1>
          <img src="/images/spoon.png" alt="about_spoon" className="w-[45px]" />
          <p className="font-opensans text-[#AAAAAA] text-base leading-relaxed my-8">
            Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasse interdum mi aliquam In sed odio nec aliquet.
          </p>
          <button type="button" className="bg-[#DCCA87] text-black font-cormorant font-bold py-3 px-8 rounded-sm hover:bg-white transition">Know More</button>
        </div>

      </div>
    </div>
  );
};

export default About;