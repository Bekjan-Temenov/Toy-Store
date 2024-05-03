import { Container } from "../../Container/Container";
import p1 from "../../assets/svg/Frame1.svg"
import p2 from "../../assets/svg/Frame2.svg"
import p3 from "../../assets/svg/Frame3.svg"
import p4 from "../../assets/svg/Frame4.svg"
import p5 from "../../assets/svg/Frame 33.svg"
import p6 from "../../assets/svg/Frame34.svg"
import p7 from "../../assets/svg/Frame 35.svg"
import p8 from "../../assets/svg/Frame 36.svg"
import p9 from "../../assets/svg/Frame 37.svg"
import clock from "../../assets/svg/oclock.svg"
function Banners() {
  return (
    <Container>
      <div className="section-1 gap-[20px] border-5 border-red-500 grid grid-cols-3 grid-rows-2 gap-15 ml-0 mt-[33px]">

        <div className="bg-cover  col-span-2 row-span-1 "
          style={{ backgroundImage: `url(${p4})` }}
        >
          <div className="absolute m-[30px]    w-[401px] h-[239px] ">

            <div className="flex gap-[10px] ">
              <img className="w-[18px] h-[18px] mt-1" src={clock} alt="img" />
              <p>12.09.2021</p>
            </div>
            <div className="flex flex-col mt-[10px] gap-[4px]">
              <h3 className="text-[#1f2533] font-lexend text-2xl font-semibold leading-8 tracking-tighter text-left">How to plant spinach correctly in<br /> winter</h3>
              <p>In most areas, successive sowing can be done from early spring until early winter, but more often during hotter months...
              </p>
            </div>
            <button className="pl-[33px] pr-[33px] pt-[11px] pb-[11px] rounded-lg mt-[14px] bg-white">Read</button>
          </div>
          <img className="w-full " src={p4} alt="img" />
        </div>

        <div className="row-span-2 ">
          <div className="absolute m-[40px]  w-[401px] h-[239px] ">
            <div className="flex gap-[10px] ">
              <img className="w-[18px] h-[18px] mt-1" src={clock} alt="img" />
              <p>12.09.2021</p>
            </div>
            <div className="flex flex-col mt-[10px] gap-[4px]">
              <h3 className="text-[#1f2533] font-lexend text-2xl font-semibold leading-8 tracking-tighter text-left">How to plant spinach correctly <br /> in winter</h3>
              <p>In most areas, successive sowing can be done<br /> from early spring until early winter, but more <br /> often during hotter months...
              </p>
            </div>
            <button className="pl-[33px] pr-[33px] pt-[11px] pb-[11px] rounded-lg mt-[14px] bg-white">Read</button>
          </div>
          <img className="w-full" src={p3} alt="img" />
        </div>
        <div className="row-span-1 ">
          <div className="absolute m-[30px]  w-[401px] h-[239px] ">
            <div className="flex gap-[10px] ">
              <img className="w-[18px] h-[18px] mt-1" src={clock} alt="img" />
              <p>12.09.2021</p>
            </div>
            <div className="flex flex-col mt-[10px] gap-[4px]">
              <h3 className="text-[#1f2533] font-lexend text-2xl font-semibold leading-8 tracking-tighter text-left">How to plant spinach correctly <br /> in winter</h3>
            </div>
            <button className="pl-[33px] pr-[33px] pt-[11px] pb-[11px] rounded-lg mt-[14px] bg-white">Read</button>
          </div>
          <img className="w-full" src={p2} alt="img" />
        </div>

        <div className="row-span-1 ">
          <div className="absolute m-[30px]  w-[401px] h-[239px] ">
            <div className="flex gap-[10px] ">
              <img className="w-[18px] h-[18px] mt-1" src={clock} alt="img" />
              <p>12.09.2021</p>
            </div>
            <div className="flex flex-col mt-[10px] gap-[4px]">
              <h3 className="text-[#1f2533] font-lexend text-2xl font-semibold leading-8 tracking-tighter text-left">How to plant spinach correctly <br /> in winter</h3>
            </div>
            <button className="pl-[33px] pr-[33px] pt-[11px] pb-[11px] rounded-lg mt-[14px] bg-white">Read</button>
          </div>
          <img className="w-full" src={p1} alt="img" />
        </div>

        <div className="col-span-2 row-span-1 ">
          <div className="absolute m-[30px]    w-[401px] h-[239px] ">

            <div className="flex gap-[10px] ">
              <img className="w-[18px] h-[18px] mt-1" src={clock} alt="img" />
              <p>12.09.2021</p>
            </div>
            <div className="flex flex-col mt-[10px] gap-[4px]">
              <h3 className="text-[#1f2533] font-lexend text-2xl font-semibold leading-8 tracking-tighter text-left">How to plant spinach correctly in<br /> winter</h3>
              <p>In most areas, successive sowing can be done from early spring until early winter, but more often during hotter months...
              </p>
            </div>
            <button className="pl-[33px] pr-[33px] pt-[11px] pb-[11px] rounded-lg mt-[14px] bg-white">Read</button>
          </div>
          <img className="w-full " src={p5} alt="img" />
        </div>

        <div className="row-span-1 ">
          <div className="absolute m-[30px]  w-[401px] h-[239px] ">
            <div className="flex gap-[10px] ">
              <img className="w-[18px] h-[18px] mt-1" src={clock} alt="img" />
              <p>12.09.2021</p>
            </div>
            <div className="flex flex-col mt-[10px] gap-[4px]">
              <h3 className="text-[#1f2533] font-lexend text-2xl font-semibold leading-8 tracking-tighter text-left">How to plant spinach correctly <br /> in winter</h3>
            </div>
            <button className="pl-[33px] pr-[33px] pt-[11px] pb-[11px] rounded-lg mt-[14px] bg-white">Read</button>
          </div>
          <img className="w-full" src={p6} alt="img" />
        </div>

        <div className="row-span-1 ">
          <div className="row-span-2 ">
            <div className="absolute m-[40px]  w-[401px] h-[239px] ">
              <div className="flex gap-[10px] ">
                <img className="w-[18px] h-[18px] mt-1" src={clock} alt="img" />
                <p>12.09.2021</p>
              </div>
              <div className="flex flex-col mt-[10px] gap-[4px]">
                <h3 className="text-[#1f2533] font-lexend text-2xl font-semibold leading-8 tracking-tighter text-left">How to plant spinach correctly <br /> in winter</h3>
                <p>In most areas, successive sowing can be done<br /> from early spring until early winter, but more <br /> often during hotter months...
                </p>
              </div>
              <button className="pl-[33px] pr-[33px] pt-[11px] pb-[11px] rounded-lg mt-[14px] bg-white">Read</button>
            </div>
            <img className="w-full" src={p7} alt="img" />
          </div>
        </div>

        <div className="row-span-1 ">
          <div className="row-span-2 ">
            <div className="absolute m-[40px]  w-[401px] h-[239px] ">
              <div className="flex gap-[10px] ">
                <img className="w-[18px] h-[18px] mt-1" src={clock} alt="img" />
                <p>12.09.2021</p>
              </div>
              <div className="flex flex-col mt-[10px] gap-[4px]">
                <h3 className="text-[#1f2533] font-lexend text-2xl font-semibold leading-8 tracking-tighter text-left">How to plant spinach correctly <br /> in winter</h3>
                <p>In most areas, successive sowing can be done<br /> from early spring until early winter, but more <br /> often during hotter months...
                </p>
              </div>
              <button className="pl-[33px] pr-[33px] pt-[11px] pb-[11px] rounded-lg mt-[14px] bg-white">Read</button>
            </div>
            <img className="w-full" src={p8} alt="img" />
          </div>
        </div>

        <div className="row-span-1 ">
          <div className="row-span-2 ">
            <div className="absolute m-[40px]  w-[401px] h-[239px] ">
              <div className="flex gap-[10px] ">
                <img className="w-[18px] h-[18px] mt-1" src={clock} alt="img" />
                <p>12.09.2021</p>
              </div>
              <div className="flex flex-col mt-[10px] gap-[4px]">
                <h3 className="text-[#1f2533] font-lexend text-2xl font-semibold leading-8 tracking-tighter text-left">How to plant spinach correctly <br /> in winter</h3>
                <p>In most areas, successive sowing can be done<br /> from early spring until early winter, but more <br /> often during hotter months...
                </p>
              </div>
              <button className="pl-[33px] pr-[33px] pt-[11px] pb-[11px] rounded-lg mt-[14px] bg-white">Read</button>
            </div>
            <img className="w-full" src={p9} alt="img" />
          </div>
        </div>

      </div>
    </Container>
  );
}
export default Banners;
