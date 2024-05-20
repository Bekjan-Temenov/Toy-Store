import { Container } from "../Container/container"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { addToCart } from "../../Redux/cart/cartSlice"
import { addWishlist } from "../../Redux/wishlist/wishlistSlice"
import Raiting from "./Raiting"
import cart from "../../assets/svg/cart.svg"
import products from "./API"
import WishList from "../Home/Buttuns/wishlist"
function Products() {
    const dispatch = useDispatch()
    function addCart(item) {
        console.log(item)
        dispatch(addToCart(item))
    }
    function addWish(item) {
        console.log(item)
        dispatch(addWishlist(item))
    }
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
                        <motion.div variants={animation} custom={index} className="w-[350px] h-[512px] border rounded-lg  p-[28px]">
                            <div className="ml-[-40px] absolute mt-[-20px] w-[40px] h-[40px] rounded-full flex items-center justify-center">
                                <button onClick={() => addWish(product)} >
                                    <WishList />
                                </button>
                            </div>
                            <Link to="/information">
                                <img className="w-[292px] h-[304px]" src={product.img} />
                            </Link>
                            <p className="mt-[10px] mb-[10px]"><Raiting /></p>
                            <h3 className="text-custom-color text-3xl font-semibold leading-7 tracking-wider text-left">{product.name}</h3>
                            <p className="text-gray-500">{product.description}</p>
                            <div className="flex justify-between">
                                <p className="text-gray-800 font-lexend text-2xl font-semibold leading-16 tracking-normal text-left">${product.price}</p>
                                {product.discount > 0 && <p className="text-gray-600 font-lexend text-lg font-semibold leading-14 tracking-normal text-center inline-block p-2 line-through mr-[170px]"> ${product.discount}</p>}
                                <button onClick={() => addCart(product)}>
                                    <img src={cart} alt="img" />
                                </button>
                            </div>
                        </motion.div>
                    </li>
                ))}
            </motion.div>
        </Container>
    )
}
export default Products