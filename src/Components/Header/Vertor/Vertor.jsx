import { useState, useRef, useEffect } from "react";
import love from "../../../assets/svg/vertor.svg";
import basket1 from "../../../assets/svg/icon_cart_simple.svg";
import Love from "../Love/Love";
import Basket from "../Basket/Basket";

const Vertor = () => {
  const [loves, setLoves] = useState(false);
  const [basket, setBasket] = useState(false)
  const basketRef = useRef(null);
  const loveRef = useRef(null);


  useEffect(() => {
    function handleClickOutside(event) {
      if (loveRef.current && !loveRef.current.contains(event.target)) {
        setLoves(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (basketRef.current && !basketRef.current.contains(event.target)) {
        setBasket(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex gap-2 pt-2" >
      <div className="relative">
        <img
          src={love}
          alt="love"
          onClick={() => {
            setLoves(!loves);
          }}
        />
        {loves && (
          <div
            ref={loveRef}
            className="mt-[50px] border-2 leading-[50px] w-[329px] h-[286px] absolute z-10 rounded-lg  shadow-lg shadow-black-500/50 font-semibold bg-white right-[-35px]"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <Love />
          </div>
        )}
      </div>

      <div className="relative">
        <img
          src={basket1}
          alt="Basket"
          onClick={() => {
            setBasket(!basket);
          }}
        />
        {basket && (
          <div
            ref={basketRef}
            className="mt-[40px] border-2 leading-[50px] w-[529x] absolute z-10 rounded-lg h-[383px] shadow-lg shadow-black-500/50 font-semibold bg-white right-[-35px]"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <Basket />
          </div>
        )}
      </div>
    </div>
  );
};
export default Vertor;