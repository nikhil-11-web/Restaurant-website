import React from 'react';

const FooterOverlay = () => {
  return (
    <div className="w-full h-full absolute top-0 left-0 -z-10 flex flex-col">
      {/* Black top section */}
      <div className="h-1/4 bg-black" />

      {/* Image background section */}
      <div className="h-3/4 bg-[url('/images/bg.png')] bg-cover bg-repeat bg-center" />
    </div>
  );
};

export default FooterOverlay;