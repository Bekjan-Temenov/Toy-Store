import { Container } from "../Container/container";
import { motion } from "framer-motion";
import Add from './Buttuns/Addtocart'
import Discover from "./Buttuns/Discover"


import list3 from "../../assets/svg/list3.svg"
import list from "../../assets/svg/list2.svg"
import logo from "../../assets/svg/list_logo.svg"
function List() {
    return (
        <Container >
            <motion.div className="" initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }}
            transition={{ duration: 4, ease: "easeInOut" }}>

                <div
                    className="w-[1110px] h-[455px] m-auto "
                    style={{ backgroundImage: `url(${list})` }}
                >
                    <div className="pl-[76px] pt-[48px] style={{ backgroundImage: `url(${list})` }}">
                        <h1 className="text-blue-gray-800 font-lexend text-5xl font-semibold leading-14 tracking-normal text-left">SEEDRA Basil Seeds for Indoor<br /> and Outdoor Planting</h1>
                        <p className="text-base mt-[12px] font-light leading-7 text-blue-gray-800 font-lexend text-left">Be sure of our quality - the freshest batches of this season. Non-GMO,<br /> Heirloom - our seeds were tested and have the best germination ratings.<br /> Your easy growing experience is our guarantee</p>
                        <div className="flex gap-[10px] mt-[21px]">
                            <img className="w-[28px] h-[36px]" src={logo} alt="img" />
                            <h1 className="text-blue-gray-800 font-lexend text-3xl font-semibold leading-14 tracking-normal text-left">$12 .56</h1>
                            <p className="text-gray-600 font-lexend text-lg font-semibold leading-14 tracking-normal text-center inline-block p-2 line-through">$15.56</p>
                        </div>
                        <div className="flex gap-[12px] mt-[25px] text-green-600">
                            <button className=""><Add /></button>
                            <button className=""><Discover /></button>
                        </div>
                    </div>
                </div>
                <div className="w-[1110px] h-[104px] m-auto mt-[16px] flex flex-col items-center justify-center "
                    style={{ backgroundImage: `url(${list3})` }}>
                    <h1 className="text-custom-color text-xl font-semibold leading-7 tracking-wider text-left">We sell seeds </h1>
                    <p className="text-custom-color text-gray-500 text-base font-medium leading-loose tracking-tight text-left">that always sprout and gardening supplies which never break</p>
                </div>
            </motion.div>
        </Container>
    );
}

export default List;
