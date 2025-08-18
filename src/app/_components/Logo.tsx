import Link from 'next/link'



export default function Logo({name, href}: {name: string, href: string}) {

  return (
    <Link href={href}>
      <h3 className='text-[3rem] uppercase leading-tight font-serif text-amber-300'>
        {name}
      </h3>
    </Link>
  )
}
