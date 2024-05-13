import { Container } from "../Container/container";

import img1 from "../../assets/svg/Frame(1).svg"
import img2 from "../../assets/svg/Frame(2).svg"
import img3 from "../../assets/svg/Frame(3).svg"
import img4 from "../../assets/svg/Frame(4).svg"
import img5 from "../../assets/svg/Frame(5).svg"
import img6 from "../../assets/svg/Frame(6).svg"
import img7 from "../../assets/svg/Frame(7).svg"
function Filter() {
  return (
    <Container>
      <div className="mt-[48px]">
        <div className="flex justify-between">
          <h1 className="text-custom-color text-3xl font-semibold leading-7 tracking-wider text-left">Our products</h1>
          <p className="w-[153px] h-[50px] flex items-center justify-center text-green-600 text-custom-color text-base font-medium leading-loose tracking-tighter text-left box-border border border-light-grey-stroke rounded-lg bg-white">View all (12)</p>
        </div>
        <div className="mt-[40px] flex  justify-between">

          <div className="flex items-center justify-center w-[110px] h-[72px]  gap-[12px] border border-gray-300 rounded-lg ">
            <img className="w-[21px] h-[21px]" src={img7} alt="img" />
            <button className="text-custom-color text-base font-normal leading-loose tracking-normal text-center rounded-lg">
              ALL
            </button>
          </div>
          <div className="w-[144px] h-[72px]  flex items-center justify-center gap-[12px] border border-gray-300 rounded-lg ">
            <img className="w-[21px] h-[21px]" src={img3} alt="img" />
            <button className="text-custom-color text-base font-normal leading-loose tracking-normal text-center rounded-lg">
              BUNDLES
            </button>
          </div>
          <div className="w-[128px] h-[72px] rounded-lg flex items-center justify-center gap-[12px] border border-gray-300  ">
            <img className="w-[21px] h-[21px]" src={img1} alt="img" />
            <button className="text-custom-color text-base font-normal leading-loose tracking-normal text-center">
              HERBS
            </button>
          </div>
          <div className="w-[187px] h-[72px] rounded-lg flex items-center justify-center gap-[12px] border border-gray-300  ">
            <img className="w-[21px] h-[21px]" src={img2} alt="img" />
            <button className="text-custom-color text-base font-normal leading-loose tracking-normal text-center">
              VEGETABLES
            </button>
          </div>
          <div className="w-[148px] h-[72px] rounded-lg flex items-center justify-center gap-[12px] border border-gray-300  ">
            <img className="w-[21px] h-[21px]" src={img5} alt="img" />
            <button className="text-custom-color text-base font-normal leading-loose tracking-normal text-center">
              FRUITS
            </button>
          </div>
          <div className="w-[157px] h-[72px] rounded-lg flex items-center justify-center gap-[12px] border border-gray-300  ">
            <img className="w-[21px] h-[21px]" src={img6} alt="img" />
            <button className="text-custom-color text-base font-normal leading-loose tracking-normal text-center">
              SUPPLIES
            </button>
          </div>
          <div className="w-[163px] h-[72px] rounded-lg flex items-center justify-center gap-[12px] border border-gray-300  ">
            <img className="w-[21px] h-[21px]" src={img4} alt="img" />
            <button className="text-custom-color text-base font-normal leading-loose tracking-normal text-center">
              FLOWERS
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Filter;
