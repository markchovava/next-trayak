import Link from 'next/link'
import Image1 from './images/Image1'
import LogoImage from '../public/assets/img/logo.png';


export default function Logo({name, href}: {name: string, href: string}) {

  return (
    <Link href={href}>
     {/*  <h3 className='text-[3rem] uppercase leading-tight font-serif text-amber-300'>
        {name}
      </h3> */}
      <div className='w-[9rem]'>
        <img src="/assets/img/logo.png" className='w-full h-auto object-contain' />
      </div>
    </Link>
  )
}
