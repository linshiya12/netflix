import React from 'react'
import { logo_img } from '../utils/constant'

const Header = () => {
  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black w-full z-10'>
        <img className='w-50 mx-40 ' src={logo_img} alt="logo" />
    </div>
  )
}

export default Header