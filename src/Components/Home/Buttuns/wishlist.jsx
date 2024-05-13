import  { useState } from 'react';
import heart from '../../../assets/svg/heart.svg';
import heartFilled from '../../../assets/svg/heart1.svg';

function YourComponent() {
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="border absolute ml-[275px] mt-[-20px] w-[40px] h-[40px] rounded-full flex items-center justify-center">
      <button onClick={toggleLike}>
        <img 
          src={isLiked ? heartFilled : heart} 
          alt="img" 
        />
      </button>
    </div>
  );
}

export default YourComponent;
