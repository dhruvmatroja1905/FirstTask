

import React from 'react'
import { GiShoppingCart } from "react-icons/gi";
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'


import feature_img1 from '../assets/feature_img1.jpg'




const Featuregrid = ({id, image, title, description, label, price, sales,  }) => {



    return (



        <div className='flex flex-col bg-white rounded-lg m-2 px-[15px] '>


        {image && (
            <img src={feature_img1} alt='' className='h-[300px] w-[900px] py-2 rounded-md' />
        )}   

            <h1 className='text-2xl lg:text-3xl  font-semibold text-left'>{title}</h1>

            <p className='text-[14px]  text-left text-slate-700'>{description}</p>

            <div className='flex items-center flex-row flex-grow-1 pb-5'>

    <div className='flex flex-col justify-between'>
        <div className='font-bold text-lg lg:text-xl xl:text-2xl'>${price}</div>
        <div className='text-gray-600 text-sm lg:text-base'>{sales}</div>
    </div>

    <div className='flex items-center space-x-4 ml-auto'>
        <button className='text-gray-500 text-2xl px-2 sm:px-4 py-2 border border-solid border-gray-500 rounded-md hover:bg-gray-500 hover:text-white sm:text-[20px]'>
            <GiShoppingCart />
        </button>

        <button className='border border-blue-500 text-blue-500 px-4 sm:px-6 py-2 sm:py-1 rounded-md text-[14px] sm:text-[16px] hover:bg-blue-500 hover:text-white'>
            {label}
        </button>
    </div>

</div>



        </div>
    )
}

export default Featuregrid;
