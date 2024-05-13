import { Container } from "../Container/container";

function Banners() {
  return (
    <Container>
      <div className="flex justify-between mt-[87px]">
          <h1 className="text-custom-color text-3xl font-semibold leading-7 tracking-wider text-left">Our Blog.</h1>
          <p className="w-[153px] h-[50px] flex items-center justify-center text-green-600 text-custom-color text-base font-medium leading-loose tracking-tighter text-left box-border border border-light-grey-stroke rounded-lg bg-white">Go to our blog</p>
        </div>
    </Container>
  );
}

export default Banners;
