import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import feature_img3 from '../assets/feature_img3.jpg'

const Aboutgrid = ({ image, title, description, rating }) => {
  return (
    <div className='flex  gap-5 flex-col bg-white rounded-lg m-2   lg:p-2 '>
      <img src={feature_img3} alt='image' className=' w-[550px] h-[100%] cursor-pointer' />
      <div className='grid grid-flow-col sm:grid-cols-2 sm:mr-10'>
        <div className='px-4 sm:px-10'>
          <h1 className='text-xl lg:text-1xl   item-start font-semibold justify-items-start'>{title}</h1>

          <p className='text-[14px]  text-slate-700 justify-items-start item-start'>{description}</p>
        </div>

        <div className='item-end justify-items-end'>
          <a href='' className='text-orange-500 items-end justify-items-end flex  p-6 '><AiFillStar className='text-2xl' />
            <AiFillStar className='text-2xl' />
            <AiFillStar className='text-2xl' />
            <AiFillStar className='text-2xl' />
            <AiFillStar className='text-2xl' />
            <span className='text-black  text-xs sm:text-base'>{rating}</span>
          </a>
        </div>

      </div>

    </div>
  )
}

export default Aboutgrid
