import { MainNavItemInterface } from '@/app/_data/interfaces/NavInterfaces'
import Link from 'next/link'
import React from 'react'
import { FaAngleRight } from 'react-icons/fa6'

export default function FooterNavItem({dbData}: {dbData: MainNavItemInterface}) {
    const i = dbData
  return (
    <Link href={i.href}>
        <li className='flex items-center gap-1 group hover:translate-x-1 ease-in-out transition-all duration-300'>
            <FaAngleRight className='text-transparent group-hover:text-amber-300 ease-in-out transition-all duration-300' />
            <span>{i.title}</span>
        </li>
    </Link>
  )
}
