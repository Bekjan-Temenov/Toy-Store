import React from 'react'
import logo from '../../../assets/svg/Frame (1).svg'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <div className='pt-2'>
      <Link to={'/'}>
      
    <img src={logo} alt="" />
      </Link>
  </div>
  )
}

export default Logo