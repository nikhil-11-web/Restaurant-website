import React, { useRef } from 'react';
import { BsInstagram, BsArrowRightShort } from 'react-icons/bs'; 
const SubHeading = ({ title }) => (
  <div className="mb-4">
    <p className="font-cormorant font-bold text-white text-xl tracking-wider capitalize">
      {title}
    </p>
    <img 
      src="/images/spoon.png" 
      alt="spoon" 
      className="w-[45px]" 
    />
  </div>
);


const galleryImages = [
  '/images/gallery01.png', 
  '/images/gallery02.png',
  '/images/gallery03.png',
  '/images/gallery04.png',
  '/images/findus.png',
];

const GalleryImage = ({ image, index }) => (
  <div className="relative min-w-[300px] h-[447px] mr-8 cursor-pointer group overflow-hidden rounded-lg">

    <img 
      src={image} 
      alt="gallery_image" 
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-100" 
    />
    

    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center gap-4">
      <BsInstagram className="text-white text-4xl" />
    </div>
  </div>
);

const Gallery = () => {
  
  const scrollRef = useRef(null);

  return (
    <div className="flex flex-col md:flex-row bg-[#0C0C0C] py-16 px-4 sm:px-8 lg:px-16 min-h-screen items-center" id="gallery">
      
    
      <div className="flex-1 flex flex-col justify-center items-start min-w-full md:min-w-[500px] pr-0 md:pr-16 mb-12 md:mb-0">
        <SubHeading title="Instagram" />
        <h1 className="font-cormorant text-[#DCCA87] text-5xl md:text-6xl font-bold leading-tight capitalize mb-6">
          Photo Gallery
        </h1>
        <p className="font-sans text-[#AAAAAA] text-base leading-relaxed mb-8" style={{ marginTop: '2rem' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.
        </p>
        
        <button 
          type="button" 
          className="bg-[#DCCA87] text-black font-cormorant font-bold text-base py-3 px-8 rounded-sm hover:bg-white transition-colors duration-300 shadow-lg"
        >
          View More
        </button>
      </div>

    
      <div className="flex-1 w-full md:max-w-[50%] lg:max-w-[60%] flex flex-row gap-8">
    
        <div 
          className="flex flex-row overflow-x-auto w-full gallery__images-container pb-8" 
          ref={scrollRef}
        >
            

[Image of refined plating techniques]

          {galleryImages.map((image, index) => (
            <GalleryImage key={`gallery_image-${index + 1}`} image={image} index={index} />
          ))}
        </div>
      </div>

      <style jsx>{`
        .gallery__images-container::-webkit-scrollbar {
          display: none;
        }
        .gallery__images-container {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}</style>
    </div>
  );
};

export default Gallery;