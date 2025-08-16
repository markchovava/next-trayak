import Link from 'next/link'
import React from 'react'
import { LogoInterface } from '../_data/interfaces/LogoInterface'



export default function Logo({dbData, css}: {dbData: LogoInterface, css: string}) {

  return (
    <>
    <Link href={dbData.href}>
        <h3 className={`${css} leading-0 uppercase font-serif`}>
            {dbData.name}</h3>
    </Link>
    </>
  )
}
