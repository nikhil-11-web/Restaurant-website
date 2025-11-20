import React from 'react';



const accentColor = 'text-[#DCCA87]';       
const primaryTextColor = 'text-white';
const darkBackground = 'bg-black'; 
const darkOrange = 'text-[#CC5500]';        
const darkPurple = 'text-[#6A0DAD]';        

const brandTitleColor = 'text-cyan-400'; 

const spoonPlaceholder = "/images/spoon.png";
const menuHighlightPlaceholder = "public/images/menu.png";
const cocktailPlaceholder = "public/images/Dark_N_Stormy.webp";


const SubHeading = ({ title }) => (
    <div className="mb-4 flex flex-col items-center">
      <p className={`font-cormorant text-xl tracking-wider italic ${accentColor} text-center font-normal`}>
        {title}
      </p>
      <img 
        src={spoonPlaceholder} 
        alt="Spoon icon divider" 
        onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/45x15/000000/DCCA87?text=-"; }}
        className='w-[45px] h-auto mt-2 object-contain'
      />
    </div>
);


const MenuItem = ({ title, price, tags, tagColor = 'text-gray-400' }) => (
    <div className="flex flex-col w-full hover:scale-[1.01] transition-transform duration-300 group">
      <div className="flex justify-start items-end">
        
        <p className={`font-cormorant text-xl sm:text-2xl font-bold ${brandTitleColor} tracking-wide group-hover:text-white transition-colors duration-300 flex-shrink-0`}>
          {title}
        </p>

        <div className="flex-1 h-[1px] bg-white opacity-20 mx-4 mb-1 flex-shrink" />

        <p className={`font-cormorant text-xl sm:text-2xl font-bold ${primaryTextColor} tracking-wider flex-shrink-0`}>
          {price}
        </p>
      </div>
      <div className='w-full mt-1'>
        <p className={`font-opensans text-sm italic ${tagColor}`}>
          {tags}
        </p>
      </div>
    </div>
);


const CustomButton = ({ children }) => (
  <button 
    type="button" 
    className="bg-[#DCCA87] text-black font-cormorant text-lg font-extrabold py-3 px-10 mt-8 rounded-sm transition-all duration-300 shadow-lg hover:bg-white hover:text-[#DCCA87] hover:shadow-2xl active:scale-95 border-2 border-transparent hover:border-[#DCCA87]"
  >
    {children}
  </button>
);


const wineMenu = [
    { title: "Chapel Hill Shiraz", price: "$56", tags: "AU | Bottle | Dry Red" },
    { title: "Catena Malbec", price: "$59", tags: "AR | Bottle | Full-bodied" },
    { title: "La Vieille Rosé", price: "$44", tags: "FR | 750 ml | Provencal" },
    { title: "Rhino Pale Ale", price: "$31", tags: "CA | 330 ml | Hoppy Notes" },
    { title: "Irish Guinness", price: "$26", tags: "IE | 700 ml | Creamy Stout" },
];

const cocktailMenu = [
    { title: "Aperol Spritz", price: "$20", tags: "Aperol | Prosecco | Soda | Orange Slice" },
    { title: "Dark 'N' Stormy", price: "$16", tags: "Dark Rum | Ginger Beer | Fresh Lime" },
    { title: "Manhattan", price: "$25", tags: "Rye Whiskey | Sweet Vermouth | Bitters" },
    { title: "Old Fashioned", price: "$31", tags: "Bourbon | Brown Sugar | Angostura Bitters" },
    { title: "Negroni", price: "$26", tags: "Gin | Sweet Vermouth | Campari | Orange Zest" },
];

const SpecialMenu = () => {
  
  const backgroundStyle = "bg-black  bg-cover bg-center bg-no-repeat";

  const handleError = (e, fallbackText) => {
    e.target.onerror = null; 
    e.target.src = `https://placehold.co/250x300/000000/DCCA87?text=${fallbackText}`;
  };

  return (
    <section 
        id="menu" 
        className={`${darkBackground} ${backgroundStyle} flex flex-col justify-center items-center py-20 md:py-32 px-4 sm:px-16`}
    >
      
      <div className='mb-16 text-center'>
        <SubHeading title="Explore our fine selection" /> 
        <h1 className={`font-cormorant text-6xl md:text-8xl ${darkOrange} font-extrabold mt-3 tracking-tighter`}>
          Today's Special
        </h1>
      </div>
      <div className='w-full max-w-7xl flex flex-col xl:flex-row justify-center items-start gap-16'>
        
        <div className='flex flex-1 flex-col items-center w-full'>
          <p className={`font-cormorant text-4xl md:text-5xl font-bold ${primaryTextColor} mb-12 border-b border-white/10 pb-2`}>
            Wine & Beer
          </p>
          
          <div className='flex flex-col w-full gap-8'>
            {wineMenu.map((item, index) => (
              <MenuItem 
                key={`wine-${index}`} 
                title={item.title} 
                price={item.price} 
                tags={item.tags}
                tagColor='text-red-700'
              />
            ))}
          </div>
        </div>
        <div className='flex flex-col gap-6 justify-center items-center w-full xl:w-[250px] my-10 xl:my-0 flex-shrink-0'>
          
          <img 
            src={menuHighlightPlaceholder}
            alt="Main menu photo" 
            onError={(e) => handleError(e, "MENU HIGHLIGHT")}
            className='w-full max-w-xs sm:max-w-sm xl:max-w-full h-auto object-cover rounded-md shadow-2xl border-4 border-[#DCCA87]/50'
          />
          
          <img 
            src={cocktailPlaceholder}
            alt="Cocktail special photo" 
            onError={(e) => handleError(e, "COCKTAIL SPECIAL")}
            className='w-full max-w-xs sm:max-w-sm xl:max-w-full h-auto object-cover rounded-md shadow-2xl border-4 border-[#DCCA87]/50 mt-4'
          />
        </div>

        
        <div className='flex flex-1 flex-col items-center w-full'>
          <p className={`font-cormorant text-4xl md:text-5xl font-bold ${primaryTextColor} mb-12 border-b border-white/10 pb-2`}>
            Cocktails
          </p>
          
          <div className='flex flex-col w-full gap-8'>
           
            {cocktailMenu.map((item, index) => (
              <MenuItem 
                key={`cocktail-${index}`} 
                title={item.title} 
                price={item.price} 
                tags={item.tags}
                tagColor='text-red-800' 
              />
            ))}
          </div>
        </div>
      </div>

     
      <div className='mt-16'>
        <CustomButton>
          View Full Menu
        </CustomButton>
      </div>
    </section>
  )
}

export default SpecialMenu;