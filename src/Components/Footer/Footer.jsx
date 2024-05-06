import { Container } from "../Container/container";
import { Link } from "react-router-dom";

import insta from "../../assets/svg/insta.svg"
import face from "../../assets/svg/face.svg"
import logo from "../../assets/svg/logo.svg"
function Footer() {
  return (
    <Container>
      <div className="flex flex-col h-[172px] pt-[41px]">
        <div className="flex justify-between">
          <Link to="/all">
            <p className="hover:text-green-500">ALL PRODUCTS</p>
          </Link>
          <div className="flex flex-col bg-gray-500 h-[25px] w-[2px] rounded-lg "></div>
          <Link to="/information">
            <p className="hover:text-green-500">ABOUT SEEDRA</p>
          </Link>
          <div className="flex flex-col bg-gray-500 h-[25px] w-[2px] rounded-lg"></div>
          <Link to="/blog">
            <p className="hover:text-green-500">OUR BLOG</p>
          </Link>
          <Link to="/">
            <img className="pl-[76px] pr-[70px]" src={logo} alt="img" />
          </Link>
          <Link to="/#">
            <p className="hover:text-green-500">Terms&Conditions</p>
          </Link>
          <div className="flex flex-col bg-gray-500 h-[25px] w-[2px] rounded-lg"></div>
          <Link to="/#">
            <p className="hover:text-green-500">Privacy Policy</p>
          </Link>
        </div>
        <div className="w-full h-[2px] mb-[21px] mt-[34px] bg-green-200"></div>
        <div className="flex justify-between">
          <div className="w-[70px] flex justify-between">
            <img src={insta} alt="img" />
            <img src={face} alt="img" />
          </div>
          <div className="text-gray-400">
            All rights reserved
          </div>
        </div>
      </div>
    </Container>
  );
}
export default Footer;