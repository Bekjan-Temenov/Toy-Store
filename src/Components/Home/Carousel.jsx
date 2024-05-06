import { motion } from 'framer-motion';
import Raiting from './Raiting';
function App() {
    const quotes = [
        {
            avatar: "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=338&ext=jpg&ga=GA1.1.553209589.1714867200&semt=ais",
            name: "Carla Samantoes-Diego",
            data: "12.09.2021",
            text: "SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and professional instructions created by PhD Helga George Be sure of our quality  the freshest batches of this season. Non-GMO, Heirloom  our seeds were tested and have the best germination ratings. ",
            author: "Mark Caine",
            boxClass: "box1",
            gradientStart: "purple",
            gradientEnd: "blue",
        },
        {
            avatar: "https://avatar.iran.liara.run/public/boy?username=Ash",
            name: "Carla Samantoes-Diego",
            data: "12.09.2021",
            text: "SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and professional instructions created by PhD Helga George Be sure of our quality  the freshest batches of this season. Non-GMO, Heirloom  our seeds were tested and have the best germination ratings.",
            author: "Les Brown",
            boxClass: "box2",
            gradientStart: "indigo",
            gradientEnd: "blue",
        },
        {
            avatar: "https://lh6.googleusercontent.com/proxy/ZLGihPRfkkerdJBqfRKKFRWQcXDCfMMuuK_6_IDH6Mfhu0VI3Du2L9eOTiz0yKsIftOesQQnj0whQCZFudjFH-cXgBKnebrpknuWtjKkDcRC5Ik",
            name: "Carla Samantoes-Diego",
            data: "12.09.2021",
            text: "SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and professional instructions created by PhD Helga George Be sure of our quality  the freshest batches of this season. Non-GMO, Heirloom  our seeds were tested and have the best germination ratings.",
            author: "Alexander Graham Bell",
            boxClass: "box3",
            gradientStart: "purple",
            gradientEnd: "pink",
        }
    ];
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
        viewport={{amount:0.3 , once: "true"}}
         className="flex flex-col items-center justify-start h-[622px] bg-white ">
            <h1 className="text-3xl font-bold mt-[51px] mb-[44px]">What out clients say</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {quotes.map((quote, index) => (
                    <motion.div
                        key={index}
                        variants={animation} custom={index++}
                        className={`relative rounded-lg overflow-hidden shadow-lg ${quote.boxClass}`}
                        whileHover={{
                            scale: 1.1,
                            boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.8)',
                            backgroundColor: '#ADFF2F'
                        }}
                    >
                        <div className="p-6">
                            <div className='flex'>
                                <img className='w-[64px] h-[64px] rounded-full' src={quote.avatar} alt="img" />
                                <div className='flex flex-col'>
                                    <h1 className='text-gray-800 font-lexend font-medium text-lg leading-6 tracking-wider text-left'>{quote.name}</h1>
                                    <p>{quote.data}</p>
                                </div>
                            </div>
                            <Raiting />
                            <p className="text-gray-800 text-lg">{quote.text}</p>
                            <h2 className="absolute bottom-6 right-6 text-gray-800 font-semibold">{quote.author}</h2>
                        </div>
                        <motion.div
                            className={`absolute top-0 left-0 w-full h-full`}
                            style={{
                                backgroundImage: ` ${quote.gradientStart}, ${quote.gradientEnd})`,
                            }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            initial={{ opacity: 0 }}
                        ></motion.div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}
export default App;