import React from 'react';

const SubHeading = ({ title }) => (
  <div className="mb-4">
    <p className="font-serif font-bold text-white text-lg sm:text-xl font-cormorant capitalize leading-loose tracking-wider">
      {title}
    </p>
    <img 
      src="/images/spoon.png" 
      alt="spoon" 
      className="w-[45px]" 
    />
  </div>
);

const awardsData = [
  {
    imgUrl: '/images/award01.png',
    title: 'Bib Gourmand',
    subtitle: 'Lorem ipsum dolor sit amet consectetur.',
  },
  {
    imgUrl: '/images/award02.png',
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet consectetur.',
  },
  {
    imgUrl: '/images/award03.png',
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet consectetur.',
  },
  {
    imgUrl: '/images/award05.png',
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet consectetur.',
  },
];

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
  <div className="flex flex-1 justify-start items-start min-w-[230px] gap-4 transition-transform hover:scale-105 cursor-default border border-gray-800 p-4 rounded-lg bg-[#1a1a1a] hover:bg-[#242424]">
    <img src={imgUrl} alt="award-icon" className="w-[50px] h-[50px] object-contain" />
    <div className="flex flex-col">
      <p className="text-[#DCCA87] font-serif text-lg font-bold mb-1 font-cormorant capitalize">
        {title}
      </p>
      <p className="text-[#AAAAAA] font-sans text-sm leading-relaxed">
        {subtitle}
      </p>
    </div>
  </div>
);

const backgroundStyle = "bg-[url('/images/bg.png')] bg-cover bg-center bg-no-repeat min-h-screen p-12 text-white";

const Laurels = () => {
  return (
    <div 
      className={`relative flex flex-col justify-center items-center min-h-screen py-16 px-4 sm:px-8 lg:px-24 overflow-hidden ${backgroundStyle}`} 
      id="awards"
    >
      
      <div className="flex flex-col lg:flex-row justify-between items-center w-full z-10 max-w-[1400px] gap-16 relative">

        <div className="flex-1 flex flex-col justify-start items-start w-full">
          <div className="mb-8">
            <SubHeading title="Awards & Recognition" />
            <h1 className="text-[#DCCA87] font-serif text-4xl md:text-6xl font-bold leading-tight mt-4 font-cormorant">
              Our Laurels
            </h1>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full mt-8">
            {awardsData.map((award) => (
              <AwardCard award={award} key={award.title} />
            ))}
          </div>
        </div>
        
        <div className="flex-1 flex justify-center items-center w-full mt-12 lg:mt-0">
          <img 
            src="/images/laurels.png" 
            alt="laurels_food" 
            className="w-[80%] lg:w-[600px] object-contain drop-shadow-2xl rounded-md hover:scale-105 transition-all duration-500" 
          />
        </div>

      </div>

    </div>
  );
};

export default Laurels;