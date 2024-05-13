import React from 'react'
import Inputs from './Inputs/Inputs'
import SortBy from './SortBy/SortBy'


const Sort = () => {
  return (
    <div>

    <div className='mt-10 flex gap-[10rem]'>
    <Inputs/>
    <SortBy/>
    </div>
    </div>
  )
}

export default Sort