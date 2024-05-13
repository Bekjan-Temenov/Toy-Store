import React from "react";
import images from "../../assets/svg/image 2.svg";
import close from "../../assets/svg/close-up-fresh-green-basil-herb-leaves-isolated-white-background 1.svg";
import fresh from "../../assets/svg/fresh-sweet-basil-leaves-isolated-white-background 2.svg";
import sweet from '../../assets/svg/fresh-sweet-basil-leaves-isolated-white-background 4.svg'
import sweet2 from '../../assets/svg/sweet.svg'

const Seedra = () => {
  return (
    <div>
        <div>
        <div className="left-[180px] top-[195px] relative">
        <img className="absolute bottom-[130px] left-[44rem]" src={close} alt="" />
      </div>
      <img className="absolute bottom-[10rem] pl-[49rem] pt-[40px]" src={fresh} alt="" />
      <img className= "absolute bottom-[20rem] right-[23rem]" src={sweet} alt="" />
      <img className="absolute bottom-[25rem] right-[169px]" src={sweet2} alt="" />
        </div>
    

      <div className="absolute bottom-[90px] right-[169px]">
        <img width={350} src={images} alt="" />
      </div>
    </div>
  );
};
    
export default Seedra;
