import { Container } from "../Container/container";
import { motion } from "framer-motion";
import p5 from "../../assets/svg/Frame 33.svg"
import p6 from "../../assets/svg/Frame34.svg"
import clock from "../../assets/svg/oclock.svg"
import Button from "./Button"
function BannerCenter() {
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
        viewport={{ amount: 0.3, once: true }}
        className="section-1 gap-[20px] border-5 border-red-500 grid grid-cols-3  gap-15 ml-0 mt-[20px]">
        <motion.div
          custom={1}
          variants={animation}
          className="col-span-2 row-span-1 ">
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
            < Button />
          </div>
          <img className="w-full " src={p5} alt="img" />
        </motion.div>
        <motion.div
          custom={2}
          variants={animation}
          className="row-span-1 ">
          <div className="absolute m-[30px]  w-[401px] h-[239px] ">
            <div className="flex gap-[10px] ">
              <img className="w-[18px] h-[18px] mt-1" src={clock} alt="img" />
              <p>12.09.2021</p>
            </div>
            <div className="flex flex-col mt-[10px] gap-[4px]">
              <h3 className="text-[#1f2533] font-lexend text-2xl font-semibold leading-8 tracking-tighter text-left">How to plant spinach correctly <br /> in winter</h3>
            </div>
            < Button />
          </div>
          <img className="w-full" src={p6} alt="img" />
        </motion.div>
      </motion.div>
    </Container>
  );
}
export default BannerCenter;
