import React from 'react'

const CategoryCard = ({name}) => {
  return (
    
    <div className='border border-gray-400  bg-white hover:scale-105 hover:border-green-600 transition-transform rounded-lg w-[250px] h-14 flex items-center justify-center'>
    <div className='flex justify-between items-center p-1'>
    <div className='space-y-4 '>

    
    <button><h3  className='font-300 text-xl bg-white'>{name}</h3></button>
    </div>
    </div>
      
    </div>

    
  )
}

export default CategoryCard
