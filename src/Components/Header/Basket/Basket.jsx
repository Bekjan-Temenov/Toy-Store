import { useSelector, useDispatch } from "react-redux"
import { updateQuantity } from '../../../Redux/cart/cartSlice'
const Basket = () => {
  const { carts } = useSelector((state) => state.cart)
  const dispatch = useDispatch()

  function changeCount(bool, item) {
    let newCount
    if (bool == "minus" && item.quantity > 1) {
      newCount = item.quantity - 1
    } else if (bool == "plus") {
      newCount = item.quantity + 1
    }
    dispatch(updateQuantity({ id: item.id, quantity: newCount }))
  }
  return (
    <>
      <div className="w-[529px] h-[286px] overflow-auto">
        {
          carts.map((data) => (
            <tr key={data.id}>
              <td>
                <div className='flex justify-around h-[124px] pt-[31px]'>
                  <img className="w-[64px] h-[63px]" src={data.img} alt="img" />
                  <div className='flex flex-col gap-[0px]'>
                    <h1 className="w-[268px] text-[rgb(31,37,51)] font-[Lexend] text-[14px] font-normal leading-[178.19%] tracking-[0] text-left">{data.description}</h1>
                    <div className="flex justify-between">
                      <p className="text-gray-500">{data.quantity} pack</p>
                      <p className=" ">{data.quantity * data.price}$</p>
                    </div>
                  </div>
                  <div >
                    <div className="box-border border border-gray-300 rounded-lg w-[104px] h-[44px] flex gap-[8px] items-center justify-center">
                      <button onClick={() => changeCount("minus", data)} className="w-[10.67px] border-[1.5px] border-green-400" ></button>
                      <button className="border-1.5 flex justify-center items-center   rounded-md text-green-500 bg-green-500 bg-opacity-10 w-[32px] h-[32px]">{data.quantity}</button>
                      <button onClick={() => changeCount("plus", data)} className=" text-green-400" >+</button>
                    </div>
                  </div>
                </div>
                <div className="border w-[497px] h-[1px] bg-gray-100"></div>
              </td>
            </tr>
          ))
        }
      </div>
      <div className="absolute rounded-lg w-[529px]  bg-white flex gap-[45px] h-[95px] pl-[230px]">
        <button>Clear</button>
        <button className="bg-green-500 rounded-lg w-[198px] h-[47px] mt-6 text-white">Proceed to payment</button>
      </div>
    </>
  )
}
export default Basket