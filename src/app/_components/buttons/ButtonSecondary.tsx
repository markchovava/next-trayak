import { ButtonInterface } from '@/app/_data/interfaces/ButtonInterfaces'
import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

export default function ButtonSecondary({title, css}: ButtonInterface) {
  return (
    <>
    <button className={`${css} flex items-center justify-center group cursor-pointer rounded-full transition-all ease-in-out duration-300 
        bg-gradient-to-br from-amber-300 to-amber-300`}>
        <span className='translate-x-1 flex group-hover:-translate-x-1 ease-in-out transition-all duration-300'>{title}</span>
        <FaArrowRightLong 
        className='text-transparent group-hover:text-black -translate-x-1 group-hover:translate-x-2 ease-in-out transition-all duration-300' />

    </button>
    </>
  )
}
