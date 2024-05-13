import { useSelector } from "react-redux";
const Love = () => {
  const { wishlists } = useSelector((state) => state.wishlists);
  console.log(wishlists);

  return (
    <>
      <div className="h-[286px] overflow-auto ">
        {
          wishlists.map((data) => (
            <tr key={data.id}>
              <td>
                <div className='flex justify-start'>
                  <img className="w-[64px] h-[63px]" src={data.img} alt="img" />
                  <div className='flex flex-col gap-[0px]'>
                    <h1 className="w-[268px] text-[rgb(31,37,51)] font-[Lexend] text-[14px] font-normal leading-[178.19%] tracking-[0] text-left">{data.description}</h1>
                    <div className="flex justify-between">
                      <p className="mt-[-15px] ">{data.price}$</p>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          ))
        }
      </div>
    </>
  );
};

export default Love;
