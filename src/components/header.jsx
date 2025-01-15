import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='flex justify-between p-[20px] bg-blue-400'>
        <div className='ml-[40px]'>
            <img className='w-[50px] h-[50px]' src="https://uxwing.com/wp-content/themes/uxwing/download/weather/weather-icon.png" alt="Logo" />
        </div>
        <div className='flex gap-4 mr-[100px] text-white'>
            <Link className='text-[20px]' to={"/"}>Home</Link>
            <Link className='text-[20px]' to={"/newYork"}>New York</Link>
            <Link className='text-[20px]' to={"/london"}>London</Link>
        </div>
    </div>
  )
}

export default Header