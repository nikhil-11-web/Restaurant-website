import React from 'react';
import SubHeading from './SubHeading';
import MenuItem from './MenuItem';

const wineMenu = [
  { title: "Chapel Hill Shiraz", price: "$56", tags: "AU | Bottle" },
  { title: "Catena Malbec", price: "$59", tags: "AR | Bottle" },
  { title: "La Vieille Rosé", price: "$44", tags: "FR | 750 ml" },
  { title: "Rhino Pale Ale", price: "$31", tags: "CA | 330 ml" },
  { title: "Irish Guinness", price: "$26", tags: "IE | 700 ml" },
];

const cocktailMenu = [
  { title: "Aperol Spritz", price: "$20", tags: "Aperol | Prosecco | Soda" },
  { title: "Dark 'N' Stormy", price: "$16", tags: "Dark Rum | Ginger Beer | Lime" },
  { title: "Daiquiri", price: "$10", tags: "Rum | Citrus juice | Sugar" },
  { title: "Old Fashioned", price: "$31", tags: "Bourbon | Brown sugar | Bitters" },
  { title: "Negroni", price: "$26", tags: "Gin | Sweet Vermouth | Campari" },
];

const SpecialMenu = () => {
  return (
    <div className="flex flex-col bg-black justify-center items-center py-16 px-4 sm:px-8 lg:px-16" id="menu">
      <div className="mb-16 text-center">
        <SubHeading title="Menu that fits you palatte" />
        <h1 className="font-cormorant text-[#DCCA87] text-5xl md:text-6xl font-bold tracking-wider capitalize">
          Today's Special
        </h1>
      </div>

      <div className="w-full flex flex-col xl:flex-row justify-center items-start gap-12 lg:gap-16 my-8">
        
        {/* Left: Wine */}
        <div className="flex-1 w-full flex flex-col justify-center items-center">
          <p className="font-cormorant text-white text-4xl md:text-5xl font-semibold mb-8">Wine & Beer</p>
          <div className="flex flex-col gap-8 w-full">
            {wineMenu.map((item, index) => (
              <MenuItem key={item.title + index} title={item.title} price={item.price} tags={item.tags} />
            ))}
          </div>
        </div>

        {/* Middle: Image */}
        <div className="w-full md:w-[410px] flex justify-center items-center">
          <img src="/images/menu.png" alt="menu_img" className="w-full h-auto object-cover max-h-[600px]" />
        </div>

        {/* Right: Cocktails */}
        <div className="flex-1 w-full flex flex-col justify-center items-center">
          <p className="font-cormorant text-white text-4xl md:text-5xl font-semibold mb-8">Cocktails</p>
          <div className="flex flex-col gap-8 w-full">
            {cocktailMenu.map((item, index) => (
              <MenuItem key={item.title + index} title={item.title} price={item.price} tags={item.tags} />
            ))}
          </div>
        </div>

      </div>

      <div className="mt-4">
        <button type="button" className="bg-[#DCCA87] text-black font-cormorant font-bold py-3 px-8 rounded-sm hover:bg-white transition duration-300">
          View More
        </button>
      </div>
    </div>
  );
};

export default SpecialMenu;