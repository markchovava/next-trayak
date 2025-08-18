import React from 'react'
import MainNavItem from './links/MainNavItem'
import { NavLinksData } from '../_data/sample/NavData'
import Logo from './Logo'
import { LogoData } from '../_data/sample/LogoData'
import Link from 'next/link'
import ButtonPrimary from './buttons/ButtonPrimary'



export default function MainNavigation() {
  return (
    <>
    <div className="mx-auto w-[92%] flex lg:flex-row flex-col items-center lg:justify-between justify-center gap-4 pt-4 pb-3">
          <Logo 
            name="TRAYAK" 
            href="/"  />
          <ul className="flex items-center justify-start gap-5 font-medium text-gray-200">
            { NavLinksData.map((i, key) => (
              <MainNavItem key={key} i={i} css="hover:text-amber-300" />
            )) }
          </ul>
          <Link href="/pdf">
            <ButtonPrimary 
              title="Download Guide" 
              css="py-3 px-5 hover:drop-shadow-lg" />
          </Link>
    </div>
    </>
  )
}
