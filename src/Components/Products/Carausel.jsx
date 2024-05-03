import { motion} from "framer-motion";
import { Container } from "../Container/container";
import carausel from "../../assets/svg/carousel.svg"
function Carousel() {
  return (
    <Container>
      <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
      }}
        className="mt-[32px] m-auto  flex items-center justify-center">
        <div className=" bg-center bg-cover w-screen h-[251px] flex justify-center items-center" style={{ backgroundImage: `url(${carausel})` }}>
          <div className="">
            <h1 className="text-4xl font-semibold leading-14 tracking-wider text-center text-gray-800 font-lexend">Welcome to our blog</h1>
            <p className="text-base font-light leading-7 text-center text-gray-800 font-lexend  ">Here you can find a lot of interesting and useful information that you need<br /> in gardening and creating a beautiful garden</p>
          </div>
        </div>
      </motion.div>
    </Container>
  );
}
export default Carousel;