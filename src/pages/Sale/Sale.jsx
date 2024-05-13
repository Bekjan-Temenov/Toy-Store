import React from 'react'
import vertor4 from '../../assets/svg/Vector (4).svg'

const Sale = () => {
  return (
    <div className='text-xl  pl-[76px] pt-5 flex gap-5'>
        <img src={vertor4} alt="" />
        <p className='text-4xl'>$12.56</p>
        <s className='pt-2 text-gray-500'>$15.56</s>
    </div>
  )
}

export default Sale