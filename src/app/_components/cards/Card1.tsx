import Link from 'next/link'
import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import ButtonTertiary from '../buttons/ButtonTertiary'


export default function Card1({title, date, href}: {title: string, date: string, href: string}) {
  return (
    <div className='rounded-2xl overflow-hidden bg-white drop-shadow hover:drop-shadow-lg ease-in-out transition-all duration-300'>
        <div className='w-full aspect-[4/3] bg-gray-400'></div>
        <div className='px-3 pt-4 pb-6 w-full flex flex-col gap-2'>
            <p className='text-amber-500 text-xl'>
                {date}
            </p>
            <h3 className='font-bold text-2xl leading-tight mb-2'>
                {title}
            </h3>
            <Link href={href} className='cursor-pointer'>
                <ButtonTertiary title="Read More" />
            </Link>
        </div>
    </div>
  )
}
