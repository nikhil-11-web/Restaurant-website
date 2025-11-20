import React, { useState, useRef } from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const vidRef = useRef();
  
  const overlayRef = useRef();
  
  const containerRef = useRef();

  const handleVideo = () => {
    setPlayVideo((prevPlayVideo) => !prevPlayVideo);

    if (playVideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  };

  useGSAP(() => {
    
    if (playVideo) {
      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 0.5,
        ease: 'power2.inOut',
        pointerEvents: 'none' 
      });
    } else {
      gsap.to(overlayRef.current, {
        opacity: 1,
        duration: 0.5,
        ease: 'power2.inOut',
        pointerEvents: 'all'
      });
    }
  
  }, { dependencies: [playVideo], scope: containerRef }); 

  const handleMouseEnter = () => {
    if (playVideo) {
      gsap.to(overlayRef.current, { opacity: 1, duration: 0.3, pointerEvents: 'all' });
    }
  };

  const handleMouseLeave = () => {
    if (playVideo) {
      gsap.to(overlayRef.current, { opacity: 0, duration: 0.5, pointerEvents: 'none' });
    }
  };

  return (
    <div 
      className='relative w-full h-screen flex justify-center items-center bg-black overflow-hidden'
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      
      <video
        src="/videos/meal.mp4"
        ref={vidRef}
        type='video/mp4'
        loop
        controls={false}
        muted
        className='w-full h-full object-cover'
      />

      <div 
        ref={overlayRef}
        className='absolute inset-0 bg-black/60 flex justify-center items-center z-10'
      >
        <div 
          className='w-[100px] h-[100px] rounded-full border border-[#DCCA87] flex justify-center items-center cursor-pointer transition-transform duration-300 hover:scale-110'
          onClick={handleVideo}
        >
          {playVideo ? (
            <BsPauseFill className='text-white text-4xl' />
          ) : (
            <BsFillPlayFill className='text-white text-4xl ml-1' />
          )}
        </div>
      </div>
      
    </div>
  );
}

export default Intro;