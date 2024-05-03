

function Button() {
    return (
        <>
            <button className="rounded-lg mt-[20px] ">
                <a href="#_" className="relative px-10 overflow-hidden rounded-lg pl-[33px] pr-[33px] pt-[11px] pb-[11px] font-medium text-green-500 bg-white border border-white-100  shadow-inner group transition-colors duration-300">
                    <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-green-200 group-hover:w-[99px] ease rounded-lg"></span>
                    <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-green-300 group-hover:w-[97px] ease"></span>
                    <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-green-400 group-hover:h-full ease rounded-lg"></span>
                    <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-green-500 group-hover:h-full ease rounded-lg"></span>
                    <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-green-600 opacity-0 group-active:opacity-100 rounded-lg"></span>
                    <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease rounded-lg">Read</span>
                </a>
            </button>
        </>
    );
}

export default Button;
