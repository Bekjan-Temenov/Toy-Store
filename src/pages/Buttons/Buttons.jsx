import React from 'react';

const Buttons = () => {
    
  return (
    <div className='pl-[76px] pt-8 flex gap-5'>
      <button className='bg-green-700 w-[150px] h-[50px] rounded-xl text-white '>Add to Cart</button>
      <button className='bg-gray-100 w-[150px] h-[50px] rounded-xl text-green-700'>Discover</button>
    </div>
  );
};

export default Buttons;
