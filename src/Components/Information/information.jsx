import { Container } from "../Container/container"
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

import image from '../../assets/svg/image.svg'
import ok from '../../assets/svg/ok.svg'
import tomato from '../../assets/svg/tomato.svg'
function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function BasicBreadcrumbs() {
  return (
    <Container>
      <div role="presentation " className="mb-[23px]" onClick={handleClick}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
          <Typography color="text.primary">Products</Typography>
        </Breadcrumbs>
      </div>
      <div className="flex">
        <div className="">
          <img src={image} alt="img" />
        </div>

        <div className="text-gray-800 font-lexend text-2xl font-semibold leading-7 tracking-wide text-left">
          <h1>SEEDRA Corn - Bodacious Hybrid Seeds for <br />  Indoor and Outdoor Planting</h1>
          <div className="flex gap-[20px] mt-[15px]">
            <div className="rounded-full bg-green-400 bg-opacity-10 w-36 h-10 flex items-center justify-center">
              <img className="w-[25px] h-[30px]" src={ok} alt="img" />
              <h4 className="text-green-500 font-lexend text-base font-normal leading-normal tracking-normal text-left">AVAILABLE</h4>
            </div>

            <div className="rounded-full border border-gray-300  bg-opacity-10 w-36 h-10 flex items-center justify-center mb-[22px]">
              <img className="rounded-full  w-[24px] h-[24px]" src={tomato} alt="img" />
              <h4 className="text-gray-800 font-lexend text-base font-normal leading-[178.19%] tracking-normal text-center">VEGETABLES</h4>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className=" flex">
              <p className="text-gray-400 font-lexend text-base font-normal leading-[178.19%] tracking-normal text-center mr-2">Size</p>
              <p className="text-gray-800 font-lexend text-base font-medium leading-[178.19%] tracking-wide text-center">2</p>
              <p className="text-gray-800 font-lexend text-base font-medium leading-[178.19%] tracking-wide text-center">PACK</p>
            </div>

            <div className="box-border border border-gray-300 rounded-lg w-[104px] h-[44px] flex gap-[8px] items-center justify-center">
              <button className="w-[10.67px] border-[1.5px] border-green-400"></button>
              <button className="border-1.5  rounded-md text-green-500 bg-green-500 bg-opacity-10 w-[32px] h-[32px]">2</button>
              <button className=" text-green-400" >+</button>
            </div>
          </div>

        </div>
      </div>
    </Container>
  );
}