import React from 'react'
import { Link } from 'react-router-dom'

const Ul = () => {
  return (
    <div className='pt-2'>
        <ul className='flex gap-10'>
            <Link to={'/all'}>
            <li>ALL PRODUCTS</li>
            </Link>
            <Link to={'/about'}>
            
            <li>ABOUT SEEDRA</li>
            </Link>

            <Link to={'/blog'}>
            
            <li>OUR BLOG</li>
            </Link>
            <Link to={'/contact'}>
            
            <li>CONTACTS</li>
            </Link>
        </ul>
    </div>
  )
}

export default Ul