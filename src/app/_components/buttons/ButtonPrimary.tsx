import { ButtonInterface } from '@/app/_data/interfaces/ButtonInterfaces'
import React from 'react'


export default function ButtonPrimary({title, css}: ButtonInterface) {
  return (
    <>
    <button className={`${css} cursor-pointer rounded-full transition-all ease-in-out duration-300 
        bg-gradient-to-br from-amber-300 to-amber-300 
        hover:bg-gradient-to-br hover:from-amber-300 hover:to-amber-400`}>
        {title}
    </button>
    </>
  )
}
