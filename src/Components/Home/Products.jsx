import { Container } from "../Container/container"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import Raiting from "./Raiting"
import cart from "../../assets/svg/cart.svg"
import products from "./API"

function Products() {
    const animation = {
        hidden: {
            y: -100,
            opacity: 0,
        },
        visible: custom => ({
            y: 0,
            opacity: 1,
            transition: { delay: custom * 0.3 }
        })
    }
    return (
        <Container>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.3, once: true }}
                className="flex flex-wrap justify-between">
                {products.map((product, index) => (
                    <li key={product.id}>
                        <motion.div variants={animation} custom={index + 1} className="w-[350px] h-[512px] border rounded-lg  p-[28px]">
                            <Link to="/information">
                                <img className="w-[292px] h-[304px]" src={product.img} />
                            </Link>
                            <p className="mt-[10px] mb-[10px]"><Raiting /></p>
                            <h3 className="text-custom-color text-3xl font-semibold leading-7 tracking-wider text-left">{product.name}</h3>
                            <p className="text-gray-500">{product.description}</p>
                            <div className="flex justify-between">
                                <p className="text-gray-800 font-lexend text-2xl font-semibold leading-16 tracking-normal text-left">${product.price}</p>
                                {product.discount > 0 && <p className="text-gray-600 font-lexend text-lg font-semibold leading-14 tracking-normal text-center inline-block p-2 line-through mr-[170px]"> ${product.discount}</p>}
                                <img src={cart} alt="img" />
                            </div>
                        </motion.div>
                    </li>
                ))}
            </motion.div>
        </Container>
    )
}
export default Products