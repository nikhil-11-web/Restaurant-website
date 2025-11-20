import React from 'react';

const SubHeading = ({ title }) => (
    <div className='mb-2 text-left'>
        <p className='font-cormorant text-golden text-2xl font-bold italic'>{title}</p>
       
        <img src="/images/spoon.png" alt="spoon" className="w-[45px] mt-1" />
    </div>
);

const Chief = () => {
    return (
      
        <div className='bg-black w-full flex justify-center items-center py-16 px-4 md:px-8 lg:px-20' id='chef'>
            
          
            <div className='w-full flex flex-col lg:flex-row justify-between items-center max-w-7xl mx-auto gap-12'>

                <div className='flex flex-1 justify-center items-center w-full lg:max-w-md'>
                    <img 
                        src="/images/chef.png" 
                        alt="Chef" 
                        
                        className='w-full h-auto object-cover shadow-2xl transition-transform duration-500 hover:scale-[1.02]' 
                    />
                </div>

                
                <div className='flex flex-1 flex-col justify-start items-start w-full mt-8 lg:mt-0'>
                    
                    
                    <SubHeading title="Chef's Word" />
                  
                    <h1 className='font-cormorant text-white text-4xl md:text-5xl lg:text-7xl font-bold tracking-wider mb-8'>
                        What We Believe In
                    </h1>
                    <div className='flex flex-col mb-8'>
                        <div className='flex items-start'>
                            <img src="/images/quote.png" alt="quote" className='w-10 h-10 mr-2 opacity-70' /> 
                            <p className='font-opensans text-gray-400 text-lg italic leading-relaxed'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit.
                            </p>
                        </div>

                        <p className='font-opensans text-gray-400 text-lg mt-4 ml-12 leading-relaxed'>
                            Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, 
                            aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc egestas.
                        </p>
                    </div>

                   
                    <div className='flex flex-col mt-6'>
                        <p className='font-cormorant text-golden text-3xl font-semibold mb-1'>Kevin Luo</p>
                        <p className='font-opensans text-gray-500 text-base mb-4'>Chef & Founder</p>
                        
                       
                        <img 
                            src="/images/sign.png" 
                            alt="chef's signature" 
                            className='w-[200px] h-auto object-contain'
                        /> 
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Chief;