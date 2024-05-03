import { Container } from "../../Container/Container";
import * as Ariakit from "@ariakit/react";
import img from "../../assets/svg/inputimg.svg";
import icon from "../../assets/svg/inputselect.svg"
function Input() {
  return (
    <Container>
      <div className="flex mt-[19px] ">
        <div className="flex mr-20 relative">
          <img className="p-6 absolute" src={img} alt="img" />
          <input className="w-[825px] h-[64px] border border-gray-300 pl-12 border-light-grey rounded-full" type="text" placeholder="Search" />
        </div>
        <div className="wrapper">
          <Ariakit.SelectProvider defaultValue="Apple">
            <Ariakit.SelectLabel className="label text-gray-400 absolute ml-4">
              Sort by
            </Ariakit.SelectLabel>
            <Ariakit.Select className="button bg-white border border-gray-300  shadow-sm px-4 py-2 inline-flex items-center border-box  rounded-full w-[258px] h-[63px] justify-between">
              <span className="text-gray-700">Recently</span>
              <img src={icon} />
            </Ariakit.Select>
            <Ariakit.SelectPopover
              portal
              sameWidth
              unmountOnHide
              gutter={4}
              className="popover origin-top-right absolute right-0 mt-2 ml-5 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
            >
              <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                <a href="#" className="select-item block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Apple</a>
                <a href="#" className="select-item block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Banana</a>
                <a href="#" className="select-item block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Grape</a>
                <a href="#" className="select-item block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Orange</a>
              </div>
            </Ariakit.SelectPopover>
          </Ariakit.SelectProvider>
        </div>
      </div>
    </Container>
  );
}
export default Input;