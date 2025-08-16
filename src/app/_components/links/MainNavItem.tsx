import { MainNavItemInterface } from '@/app/_data/interfaces/NavInterfaces'
import Link from 'next/link'
import React from 'react'
import { FaAngleDown } from "react-icons/fa";


export default function MainNavItem({i, css}: {i: MainNavItemInterface, css: string}) {
  return (
    <>
     <Link href={i.href}>
        <li className="">
            <button className={`${css} ease-in-out duration-300 transition-all cursor-pointer uppercase flex items-center justify-center gap-1`}>
            <span>{i.title}</span>
            {i.hasDropdown &&
              <FaAngleDown />
            }
            </button>
        </li>
    </Link>
    </>
  )
}
