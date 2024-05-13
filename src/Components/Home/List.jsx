import { Container } from "../Container/container";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux"
import { addToCart } from "../../Redux/cart/cartSlice"
import Add from './Buttuns/Addtocart'
import Discover from "./Buttuns/Discover"
import api from "./listApi"
import list3 from "../../assets/svg/list3.svg"
import list from "../../assets/svg/list2.svg"
import logo from "../../assets/svg/list_logo.svg"

function List() {

    const dispatch = useDispatch()
    function addCart(item) {
        console.log(item)
        dispatch(addToCart(item))
    }
    return (
        <Container >
            <motion.div className="" initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 4, ease: "easeInOut" }}>
                {
                    api.map((data) => (
                        <>
                            <div
                                className="w-[1110px] h-[455px] m-auto "
                                style={{ backgroundImage: `url(${list})` }}
                            >
                                <div className="pl-[76px] pt-[48px] style={{ backgroundImage: `url(${list})` }}">
                                    <h1 className="text-blue-gray-800 w-[670px] font-lexend text-5xl font-semibold leading-14 tracking-normal text-left">{data.description}</h1>
                                    <p className="text-base w-[560px] mt-[12px] font-light leading-7 text-blue-gray-800 font-lexend text-left">{data.name}</p>
                                    <div className="flex gap-[10px] mt-[21px]">
                                        <img className="w-[28px] h-[36px]" src={logo} alt="img" />
                                        <h1 className="text-blue-gray-800 font-lexend text-3xl font-semibold leading-14 tracking-normal text-left">${data.price}</h1>
                                        <p className="text-gray-600 font-lexend text-lg font-semibold leading-14 tracking-normal text-center inline-block p-2 line-through">$15.56</p>
                                    </div>
                                    <div className="flex gap-[12px] mt-[25px] text-green-600">
                                        <button onClick={() => addCart(data)}><Add /></button>
                                        <button className=""><Discover /></button>
                                    </div>
                                </div>
                            </div>
                            <div className="w-[1110px] h-[104px] m-auto mt-[16px] flex flex-col items-center justify-center "
                                style={{ backgroundImage: `url(${list3})` }}>
                                <h1 className="text-custom-color text-xl font-semibold leading-7 tracking-wider text-left">We sell seeds </h1>
                                <p className="text-custom-color text-gray-500 text-base font-medium leading-loose tracking-tight text-left">that always sprout and gardening supplies which never break</p>
                            </div>
                        </>
                    ))
                }
            </motion.div>
        </Container>
    );
}

export default List;
