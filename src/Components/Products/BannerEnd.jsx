import { Container } from "../Container/container";
import { motion } from "framer-motion";
import p7 from "../../assets/svg/Frame 35.svg"
import p8 from "../../assets/svg/Frame 36.svg"
import p9 from "../../assets/svg/Frame 37.svg"
import clock from "../../assets/svg/oclock.svg"
import Button from "./Button";
function BannerEnd() {
  const animation = {
    hidden: {
      y: 100,
      opacity: 0,
    },
    visible: custom => ({
      y: 0,
      opacity: 1,
      transition: { delay: custom * 0.3 },
    })
  }
  return (
    <Container>
      <motion.div
      initial="hidden"
      whileInView='visible'
      viewport={{ amount: 0.3 , once:true }}
       className=" gap-[20px]  grid grid-cols-3 mt-[20px] ">
        <motion.div
        custom={1}
        variants={animation}
         className="row-span-1 ">
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
              < Button />
            </div>
            <img className="w-full" src={p7} alt="img" />
          </div>
        </motion.div>
        <motion.div
        custom={2}
        variants={animation}
         className="row-span-1 ">
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
              < Button />
            </div>
            <img className="w-full" src={p8} alt="img" />
          </div>
        </motion.div>
        <motion.div
        custom={3}
        variants={animation}
         className="row-span-1 ">
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
              < Button />
            </div>
            <img className="w-full" src={p9} alt="img" />
          </div>
        </motion.div>
      </motion.div>
    </Container>
  );
}
export default BannerEnd