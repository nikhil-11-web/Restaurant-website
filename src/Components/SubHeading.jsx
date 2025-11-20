import React from 'react';
const accentColor = 'text-[#DCCA87]'; 

const SubHeading = ({title}) => {
  return (
    <div className="mb-4 flex flex-col items-start">
      <p className={`font-cormorant text-xl tracking-wider italic ${accentColor}`}>
        {title}
      </p>
      
     
      <img 
        src="https://placehold.co/45x15/000000/DCCA87?text=Spoon" 
        alt="Spoon" 
        className='w-[45px] h-auto mt-2 object-contain'
       
        onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/45x15/000000/DCCA87?text=-"; }}
      />
      
    </div>
  )
}

export default SubHeading;