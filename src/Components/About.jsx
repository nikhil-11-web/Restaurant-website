import React from 'react';

const About = () => {
  
  const spoonStyle = "w-10 h-auto mx-auto lg:mx-0";
  const buttonStyle = `mt-6 px-8 py-3 bg-yellow-600 text-black font-semibold text-sm uppercase tracking-wider rounded-sm shadow-md hover:bg-yellow-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 cursor-pointer`;
  
  const backgroundStyle = "bg-[url('/images/bg.png')] bg-cover bg-center bg-no-repeat min-h-screen p-12 text-white";
  
  return (
    <section 
      id="about" 
      
      className={`min-h-screen py-12 md:py-20 lg:py-24 px-4 md:px-8 ${backgroundStyle}`}
    >
      
      
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 md:gap-16 lg:gap-12 text-white">
        
       
        <div className="w-full lg:w-5/12 text-center lg:text-right order-2 lg:order-1">
          <div className="space-y-4 md:space-y-6"> 
            <h2 className="font-serif text-3xl md:text-5xl text-yellow-600 font-bold tracking-wider">About Us</h2>
            <div className="flex justify-center lg:justify-end">
                <img src="/images/spoon.png" alt="Decorative spoon icon" className={spoonStyle}/>
            </div>
            
            <p className="text-sm md:text-base text-gray-300 leading-relaxed">
              Founded in 2023, our vision was to blend traditional culinary art with modern innovation. 
              We are committed to sourcing the finest local ingredients and offering an unparalleled dining experience.
            </p>
            <button type="button" className={buttonStyle}>
              Read Our Story

            </button>
          </div>
        </div>

        
        <div className="order-1 lg:order-2 w-full lg:w-2/12 flex justify-center items-center py-4 md:py-8 lg:py-0 relative h-48 md:h-64 lg:h-auto">
            
           
            <img 
                src="/images/G.png" 
                alt="Initial letter G" 
                className="w-auto max-w-[150px] sm:max-w-xs h-auto object-cover opacity-60 md:opacity-75 absolute z-10 
                           transform scale-[1.1] md:scale-[1.3] lg:scale-[1.8]"
            />
            
            
            <img 
                src="/images/knife.png" 
                alt="Decorative kitchen knife separator" 
                className="w-auto max-w-[100px] sm:max-w-24 lg:max-w-xs h-auto object-contain relative z-20 transform" 
            />
        </div>

        
        <div className="w-full lg:w-5/12 text-center lg:text-left order-3 lg:order-3">
          <div className="space-y-4 md:space-y-6"> 
            <h2 className="font-serif text-3xl md:text-5xl text-yellow-600 font-bold tracking-wider">Our History</h2>
             <div className="flex justify-center lg:justify-start">
                <img src="/images/spoon.png" alt="Decorative spoon icon" className={spoonStyle}/>
            </div>
            
            <p className="text-sm md:text-base text-gray-300 leading-relaxed">
              We aim to be recognized globally for culinary excellence and exceptional hospitality. 
              Our focus remains on sustainable practices and creating memorable moments for every guest.
            </p>
            <button type="button" className={buttonStyle}>Meet The Chef</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;