import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'



export default function ButtonTertiary({title}: {title: string}) {
  return (
    <button className='w-full cursor-pointer group py-2 text-amber-500 font-medium flex items-center justify-center gap-2'>
        <span>{title}</span>
        <FaArrowRightLong
            className='group-hover:translate-x-2 ease-in-out transition-all duration-300' />
    </button>
  )
}
