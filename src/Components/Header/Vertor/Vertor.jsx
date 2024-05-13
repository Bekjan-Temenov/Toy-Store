import React, { useState } from "react";
import love from "../../../assets/svg/vertor.svg";
import basket1 from "../../../assets/svg/icon_cart_simple.svg";
import Love from "../Love/Love";
import Basket from "../Basket/Basket";

const Vertor = () => {
  const [loves, setLoves] = useState(false);
  const [basket,setBasket] =useState(false)
  return (
    <div className="flex gap-2 pt-2">
      <div className="relative pt-1"
        onClick={() => {
          setLoves(!loves);
        }}
      >
        <img src={love} alt="" />
        {loves && (
          <div className="mt-[40px] border-2 leading-[50px] w-[240px] absolute  z-10 rounded-lg  h-[160px]  shadow-lg shadow-black-500/50 font-semibold bg-white right-[-35px]">
            <Love />
          </div>
        )}
      </div>
      <div className="relative " onClick={()=>{
        setBasket(!basket)
      }}>
        <img src={basket1} alt="Basket" />
        {
          basket && (
            <div className="mt-[40px] border-2 leading-[50px] w-[240px] absolute  z-10 rounded-lg  h-[160px]  shadow-lg shadow-black-500/50 font-semibold bg-white right-[-35px]">
              <Basket/>
            </div>
          )
        }
      </div>
    </div>
  );
};

export default Vertor;
