import { motion } from "framer-motion";
import woman from "../../assets/png/woman.png"
function Women() {
    const animation ={
        hidden:{
            y: -100,
            opacity:0,
        },
        visible: custom => ({
            y:0,
            opacity:1,
            transition:{delay: custom * 0.3}
        })
    }
    return (
        <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{amount:0.3 , once:true}}
         className="flex items-center justify-center">
            <div className="flex flex-col gap-[31px]">
                <motion.h1 variants={animation} custom={1} className="text-4xl font-bold ">Seedra helps to grow fast and efficiant</motion.h1>
                <motion.p variants={animation} custom={2} className="font-semibold text-xl text-gray-600 leading-9 tracking-wide flex flex-col gap-[20px]"><p>SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and professional instructions created by PhD Helga George<br />
                </p>
                    <p>
                        Be sure of our quality - the freshest batches of this season. Non-GMO, Heirloom - our seeds were tested and have the best germination ratings.
                        Your easy growing experience is our guarantee
                        Spinach commom culinary uses: salads, soups, smoothies, lasagne, pizza, pies, risotto, and more<br />
                    </p>
                    <p>
                        Proudly sourced in the USA - our garden seeds are grown, harvested, and packaged in the USA. We support local farmers and are happy to produce this American-made product</p>
                </motion.p>
            </div>
            <motion.img variants={animation} custom={3} src={woman} alt="img" />
        </motion.div>
    );
}
export default Women;
